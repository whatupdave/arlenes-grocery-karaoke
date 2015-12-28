# Songbook for Arlene's Grocery karaoke

## Requirements

* Tested with node 0.10.38
* Tesseract libs (`brew install tesseract` on Mac OSX)
* Imagemagick
* `npm install`

## Usage

```
curl http://www.arleneslivekaraoke.com/images/songlist-7-15.jpg > book.jpg
convert book.jpg -colorspace Gray -depth 1 ocr.jpg
node index.js p1.jpg | grep -v '^$' > by-title.txt

# by artist
awk -F ' - ' '{ print $NF, "-", $0 }' songs.txt | sort -n -k1 | awk -F ' - ' '{ print $1, "-", $2 }' > by-artist.txt
```
