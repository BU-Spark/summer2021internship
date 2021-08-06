

import math
import os
import sys
from collections import deque, defaultdict

import pdfplumber

# Finds section headers of PDFs.
# Put PDFs in the ProblematicPDFs2 folder.
# Run this program to process them. The output is printed to console.
# Finding section headers will be used to break up the PDF into sections and find the sections that are pertinent to prosecutorial misconduct.
# The information extracted from the PDF is every character's text, font size, font, and axis aligned bounding box. The font may or may not be different depending on the style of the character, like underline, italic, and bold. PDFs contain very unstructured data.
# 
# This is a work in progress.
# If you want to work on this file, processed_pages contains all the information about the characters and the pdf that is extracted by the pdfplumber library.
# strategy1 and strategy2 are different ways of flagging lines as section headers.
# After certain lines are flagged, the pdf can be read again to determine the text of the sections in between the lines that are believed to be section headers.

def process_pdf(file_name):
	print(file_name)
	# if 'ca3' in file_name: return
	# if 'ca4' not in file_name: return
	with pdfplumber.open(file_name) as pdf:
		pages = tuple(pdf.pages)
		assert len(pages) > 0
		# if 20 < len(pages): return
		# if len(pages) <= 10: return
		font_counts = defaultdict(lambda: 0)
		font_chars = defaultdict(lambda: '')
		processed_pages = deque()
		
		colors = dict()
		colors_to_choose = [
			(255, 0, 0),
			(0, 180, 0),
			(255, 0, 255),
			(0, 255, 255),
			(200, 0, 200),
			(100, 0, 200),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
			(0, 0, 0),
		]
		
		for page_index, page in enumerate(pages):
			# if page_index != 1: continue
			
			assert page.page_number == 1 + page_index
			assert page.width == 72 * 8.5
			assert page.height == 72 * 11
			
			chars = tuple(page.chars)
			
			for char in chars:
				assert char['object_type'] == 'char'
				assert char['upright']
				assert abs((char['x0'] + char['width']) - char['x1']) < 1.1e-3
				assert char['y0'] + char['height'] == char['y1']
				assert char['top'] + page_index * 72 * 11 == char['doctop']
				assert char['top'] + char['height'] == char['bottom']
				assert char['y0'] + char['bottom'] == 72 * 11
				assert char['y1'] + char['top'] == 72 * 11
				assert char['size'] == char['height']
			
			im = page.to_image()
			processed_chars = deque()
			
			texts = defaultdict(lambda: '')
			
			lines = defaultdict(lambda: defaultdict(list))
			
			for char in sorted(chars, key = lambda char: (char['top'], char['x0'])):
				if ord(char['text']) not in range(ord('a'), ord('z') + 1):
					if ord(char['text']) not in range(ord('A'), ord('Z') + 1):
						if ord(char['text']) not in range(ord('0'), ord('9') + 1):
							if ord(char['text']) not in range(ord(' '), ord(' ') + 1):
								continue
								
				font_identifier = (
					char['fontname'],
					char['size'],
				)
				position = (
					char['top'],
					char['x0'],
				)
				if char['text'] == ' ': continue
				if page.page_number <= 2: continue
				if char['text'] != ' ':
					key = (char['fontname'], char['size'])
					if key not in colors:
						colors[key] = colors_to_choose[0]
						colors_to_choose = colors_to_choose[1:]
					im.draw_circle(
						(
							char['x0'] + char['width'] / 2,
							char['top'] + char['height'] / 2,
						),
						radius = 2,
						fill = colors[key],
						stroke = colors[key],
					)
				
				lines[font_identifier][char['top']] += [char]
					
				texts[font_identifier] += char['text']
				
			# for font_identifier in texts:
				# print(font_identifier, len(texts[font_identifier]), texts[font_identifier])
			
			# for font_identifier in {k for k in lines}:
				# for top in {k for k in lines[font_identifier]}:
					# if lines[font_identifier][top] == ' ' * len(lines[font_identifier][top]):
						# del lines[font_identifier][top]
				# if len(lines[font_identifier]) == 0:
					# del lines[font_identifier]

			for font_identifier in lines:
				if font_identifier[1] < 10: continue
				for top in lines[font_identifier]:
					for i in range(len(lines[font_identifier][top]) - 1):
						assert lines[font_identifier][top][i]['x0'] < lines[font_identifier][top][i + 1]['x0']
					is_spaces = len([char for char in lines[font_identifier][top] if char['text'] != ' ']) == 0
					for char in lines[font_identifier][top]:
						im.draw_line(
							(
								(
									char['x0'],
									char['top'],
								),
								(
									char['x0'] + char['width'],
									char['top'],
								),
							),
							(0, 0, 255) if char['text'] != ' ' else (255, 0, 0),
							stroke_width = 1,
						)
						im.draw_line(
							(
								(
									char['x0'],
									char['top'] + char['height'],
								),
								(
									char['x0'] + char['width'],
									char['top'] + char['height'],
								),
							),
							(0, 0, 255) if char['text'] != ' ' else (255, 0, 0),
							stroke_width = 1,
						)
						im.draw_line(
							(
								(
									char['x0'],
									char['top'],
								),
								(
									char['x0'],
									char['top'] + char['height'],
								),
							),
							(0, 0, 255) if char['text'] != ' ' else (255, 0, 0),
							stroke_width = 1,
						)
						im.draw_line(
							(
								(
									char['x0'] + char['width'],
									char['top'],
								),
								(
									char['x0'] + char['width'],
									char['top'] + char['height'],
								),
							),
							(0, 0, 255) if char['text'] != ' ' else (255, 0, 0),
							stroke_width = 1,
						)
						
					im.draw_line(
						(
							(
								0 if not is_spaces else 100,
								top + font_identifier[1] / 2,
							),
							(
								512 if not is_spaces else 612,
								top + font_identifier[1] / 2,
							),
						),
						(0, 0, 255) if not is_spaces else (255, 0, 0),
						stroke_width = 1,
					)
					if not is_spaces:
						num_leading_spaces = min([i for i in range(len(lines[font_identifier][top])) if lines[font_identifier][top][i]['text'] != ' '])
						left_edge = lines[font_identifier][top][num_leading_spaces]['x0']
						im.draw_line(
							(
								(
									left_edge,
									top,
								),
								(
									left_edge,
									top + font_identifier[1],
								),
							),
							(0, 255, 0),
							stroke_width = 1,
						)
						num_trailing_spaces = max([i for i in range(len(lines[font_identifier][top])) if lines[font_identifier][top][i]['text'] != ' '])
						right_edge = lines[font_identifier][top][num_trailing_spaces]['x0'] + lines[font_identifier][top][num_trailing_spaces]['width']
						im.draw_line(
							(
								(
									right_edge,
									top,
								),
								(
									right_edge,
									top + font_identifier[1],
								),
							),
							(0, 255, 0),
							stroke_width = 1,
						)

			for char_index, char in enumerate(chars):
				if ord(char['text']) not in range(ord('a'), ord('z') + 1):
					if ord(char['text']) not in range(ord('A'), ord('Z') + 1):
						if ord(char['text']) not in range(ord('0'), ord('9') + 1):
							if ord(char['text']) not in range(ord(' '), ord(' ') + 1):
								continue
				
				font_counts[char['fontname']] += 1
				font_chars[char['fontname']] += char['text']

				processed_char = {
					'char_index': char_index,
					'fontname': char['fontname'],
					'fontsize': char['size'],
					'x0': char['x0'],
					'width': char['width'],
					'height': char['height'],
					'top': char['top'],
					'doctop': char['doctop'],
					'text': char['text'],
				}
				processed_chars.append(processed_char)
			im.save('{:s}_{:d}.png'.format(file_name, page_index))
				
			processed_chars = tuple(processed_chars)
			
			processed_page = {
				'page_number': page.page_number,
				'processed_chars': processed_chars,
				'lines': lines,
			}
			processed_pages.append(processed_page)

			print(
				'processed page {:4d} / {:4d}'.format(
					page_index + 1,
					len(pages),
				),
				end = '\r',
			)
			sys.stdout.flush()
			
		print(' ' * 26, end = '\r')
		
		processed_pages = tuple(processed_pages)
		
		candidate_section_fonts = {k for k in font_counts}
		
		candidate_section_fonts = {
			font
			for font
			in candidate_section_fonts
			if font_counts[font] > 1
		}
		
		max_font_count = max(font_counts.values())
		candidate_section_fonts = {
			font
			for font
			in candidate_section_fonts
			if font_counts[font] < max_font_count
		}
		
		section_headers = strategy1(processed_pages)
		print('strategy1 : {!s:s}'.format([
			''.join([
				c['text']
				for c
				in x[0]
			])
			for x
			in section_headers
		]))
		
		section_headers = strategy2(processed_pages)
		print('strategy2 : {!s:s}'.format([
			''.join([
				c['text']
				for c
				in x[0]
			])
			for x
			in section_headers
		]))

		return processed_pages

# Look for differently styled lines that are plausibly section headers.
def strategy1(processed_pages):
	candidate_section_lines = []
	for page in processed_pages:
		for font_identifier in page['lines']:
			for top in page['lines'][font_identifier]:
				doc_top = 11 * 72 * (page['page_number'] - 1) + top
				candidate_section_lines += [(
					page['lines'][font_identifier][top],
					doc_top,
					top,
					page['page_number'],
				)]

	doc_tops = {
		x[1]
		for x
		in candidate_section_lines
	}
	doc_top_counts = {
		k: len([x for x in candidate_section_lines if x[1] == k])
		for k
		in doc_tops
	}
	candidate_section_lines = [x for x in candidate_section_lines if doc_top_counts[x[1]] <= 1]
	
	candidate_section_lines = [
		x
		for x
		in candidate_section_lines
		if True in [c['text'] != ' ' for c in x[0]]
	]
	
	counts_by_font_identifer = defaultdict(lambda: 0)
	for x in candidate_section_lines:
		line = x[0]
		font_identifier = (line[0]['fontname'], line[0]['size'])
		counts_by_font_identifer[font_identifier] += len(line)
	
	font_identifiers_by_count = sorted(
		counts_by_font_identifer.keys(),
		key = lambda k: -counts_by_font_identifer[k],
	)
	for font_identifier in font_identifiers_by_count:
		its_lines = [
			x
			for x
			in candidate_section_lines
			if (x[0][0]['fontname'], x[0][0]['size']) == font_identifier
		]
		
		section_headers = [
			''.join([
				c['text']
				for c
				in x[0]
			])
			for x
			in its_lines
		]
		print(section_headers)
		
		if is_immediately_disqualifiable(its_lines):
			print('is_immediately_disqualifiable')
			continue
		if is_likely_page_metadata(its_lines):
			print('is_likely_page_metadata')
			continue
		if is_likely_footnotes(its_lines):
			print('is_likely_footnotes')
			continue
		if its_lines == []: return []
		if its_lines[0][0][0]['size'] < font_identifiers_by_count[0][1]:
			print('is_likely_footnote_text')
			continue
		
		return its_lines
	
	return []

def is_immediately_disqualifiable(lines):
	if len(lines) < 3: return True
	if len(lines) > 4 * lines[-1][3]: return True
	return False

def is_likely_page_metadata(lines):
	print('here1')
	if len(lines) + 4 < lines[-1][3]: return False
	
	count_per_page = defaultdict(lambda: 0)
	for x in lines:
		count_per_page[x[3]] += 1
	
	print('here2')
	print(count_per_page, max(count_per_page.values()))
	if max(count_per_page.values()) >= 5: return False
	
	tops = [
		float(x[2])
		for x
		in lines
	]
	if len(tops) > 15:
		tops = sorted(tops)
		tops = tops[2:-2]
	
	mean_tops = sum(tops) / len(tops)
	diffs = [
		top - mean_tops
		for top
		in tops
	]
	diffs_squared = [
		diff * diff
		for diff
		in diffs
	]
	print('here4')
	variance = sum(diffs_squared) / (len(diffs_squared) - 0.99)
	std = math.sqrt(variance)
	if len(lines) >= 3:
		if std < 1:
			return True
	print(std)
	print(diffs)
	print('here3')
	return False

def is_likely_footnotes(lines):
	section_headers = [
		''.join([
			c['text']
			for c
			in x[0]
		])
		for x
		in lines
	]
	
	for section_header in section_headers:
		if True in [c not in '0123456789' for c in section_header]: return False
	
	num_appearances = defaultdict(lambda: 0)
	for section_header in section_headers:
		num_appearances[section_header] += 1
	for k in num_appearances:
		if (num_appearances[k] % 2) != 0:
			return False
			
	return True

# Look for lines that are centered on the page.
def strategy2(processed_pages):
	candidate_section_lines = []
	for page in processed_pages:
		for font_identifier in page['lines']:
			for top in page['lines'][font_identifier]:
				doc_top = 11 * 72 * (page['page_number'] - 1) + top
				candidate_section_lines += [(
					page['lines'][font_identifier][top],
					doc_top,
					top,
					page['page_number'],
				)]

	doc_tops = {
		x[1]
		for x
		in candidate_section_lines
	}
	doc_top_counts = {
		k: len([x for x in candidate_section_lines if x[1] == k])
		for k
		in doc_tops
	}
	candidate_section_lines = [x for x in candidate_section_lines if doc_top_counts[x[1]] <= 1]
	
	candidate_section_lines = [
		x
		for x
		in candidate_section_lines
		if True in [c['text'] != ' ' for c in x[0]]
	]
	
	counts_by_font_identifer = defaultdict(lambda: 0)
	for x in candidate_section_lines:
		line = x[0]
		font_identifier = (line[0]['fontname'], line[0]['size'])
		counts_by_font_identifer[font_identifier] += len(line)
	
	font_identifiers_by_count = sorted(
		counts_by_font_identifer.keys(),
		key = lambda k: -counts_by_font_identifer[k],
	)
	font_identifier = font_identifiers_by_count[0]
	
	candidate_section_lines = [
		x
		for x
		in candidate_section_lines
		if (x[0][0]['fontname'], x[0][0]['size']) == font_identifier
	]
	
	doc_lefts = [
		round(float(x[0][0]['x0']))
		for x in candidate_section_lines
	]
	doc_lefts = sorted(doc_lefts)
	left_occurrences_2 = defaultdict(lambda: 0)
	for x in doc_lefts: left_occurrences_2[x] += 1
	
	candidate_section_lines = [
		x
		for x
		in candidate_section_lines
		if (x[0][0]['x0']) > 84
	]
	
	# doc_rights = [
		# round(float(x[0][-1]['x0'] + x[0][-1]['width']))
		# for x in candidate_section_lines
	# ]
	# doc_rights = sorted(doc_rights)
	# right_occurrences_2 = defaultdict(lambda: 0)
	# for x in doc_rights: right_occurrences_2[x] += 1
	
	# doc_left_rights = [
		# (round(float(x[0][0]['x0'])), round(float(x[0][-1]['x0'] + x[0][-1]['width'])))
		# for x in candidate_section_lines
	# ]
	# doc_left_rights = sorted(doc_left_rights)
	# left_right_occurrences_2 = defaultdict(lambda: 0)
	# for x in doc_left_rights: left_right_occurrences_2[x] += 1

	lines_order = sorted(range(len(candidate_section_lines)), key = lambda i: round(float(candidate_section_lines[i][0][-1]['x0'] + candidate_section_lines[i][0][-1]['width'] - candidate_section_lines[i][0][0]['x0'])))
	out = []
	for i in lines_order:
		line = candidate_section_lines[i]
		left = candidate_section_lines[i][0][0]['x0']
		right = candidate_section_lines[i][0][-1]['x0'] + candidate_section_lines[i][0][-1]['width']
		width = right - left
		average = (left + right) / 2
		if width > 306 - 12: continue
		if abs(float(average) - 8.5 * 72 / 2) > 4: continue
		text = ''.join([c['text'] for c in line[0]])
		if text == str(line[3]): continue
		out += [i]
		print(width, average, line[3], text, [c['x0'] for c in line[0]])
	
	out = sorted(out)
	out = map(lambda i: candidate_section_lines[i], out)
	out = list(out)
	
	# section_headers = [
		# ''.join([
			# c['text']
			# for c
			# in x[0]
		# ])
		# for x
		# in candidate_section_lines
	# ]
	# print(section_headers)
	
	return out
		
folder_location = 'ProblematicPDFs2'
if __name__ == '__main__':
	for file_name in os.listdir(folder_location):
		if '.pdf' != file_name[-len('.pdf'):]: continue
		# if 'ca6' not in file_name: continue
		file_location = os.path.join(folder_location, file_name)
		processed_pages = process_pdf(file_location)
		