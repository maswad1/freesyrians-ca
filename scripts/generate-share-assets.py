"""Generate PNG favicons and JPEG social sharing cards for FreeSyrians.ca."""
from pathlib import Path
from math import cos, sin, pi
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
IMAGES = ASSETS / "images"
ASSETS.mkdir(parents=True, exist_ok=True)
pieces = [Image.open(IMAGES / f"hero-eagle-flag-{i}.webp").convert("RGB") for i in (1, 2, 3, 4)]
source = Image.new("RGB", (sum(im.width for im in pieces), max(im.height for im in pieces)))
x=0
for im in pieces:
    source.paste(im,(x,0))
    x += im.width

def font(size,bold=False):
    options = ([
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
    ] if bold else [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ])
    for p in options:
        if Path(p).exists():
            return ImageFont.truetype(p,size)
    return ImageFont.load_default()

NAVY="#071d32"
GOLD="#e6c17a"
CREAM="#fff9e8"
GREEN="#0c7049"
RED="#d52236"

def star(draw,cx,cy,r,fill):
    pts=[]
    for j in range(10):
        rad=r if j%2==0 else r*.42
        ang=-pi/2 + j*pi/5
        pts.append((cx+cos(ang)*rad,cy+sin(ang)*rad))
    draw.polygon(pts,fill=fill)

# Reuse the exact eagle already on the website as the primary site mark.
# The wings span the middle tiles and the tricolor is behind them.
eagle=source.crop((230,250,970,720))
primary=Image.new("RGB",(256,256),"#f7f8f5")
part=ImageOps.contain(eagle,(252,230),Image.Resampling.LANCZOS)
primary.paste(part,((256-part.width)//2,(256-part.height)//2))
primary.save(ASSETS/"favicon-eagle.png",optimize=True)

# A distinct, legible navy-and-gold calendar/flag design for the December event.
event=Image.new("RGB",(256,256),NAVY)
d=ImageDraw.Draw(event)
d.ellipse((16,16,240,240),fill="#0b304d",outline=GOLD,width=10)
d.rounded_rectangle((64,49,192,205),radius=17,fill=CREAM,outline=GOLD,width=5)
d.rounded_rectangle((64,49,192,91),radius=13,fill=GREEN)
d.rectangle((64,75,192,92),fill=GREEN)
for xx in (92,128,164): star(d,xx,82,10,RED)
d.text((128,100),"6",font=font(72,True),fill=NAVY,anchor="mt")
d.text((128,166),"DEC",font=font(22,True),fill=NAVY,anchor="mt")
event.save(ASSETS/"favicon-event.png",optimize=True)

def art_card(event_page):
    im=Image.new("RGB",(1200,630),NAVY)
    d=ImageDraw.Draw(im)
    d.rounded_rectangle((34,32,1166,598),radius=30,outline=GOLD,width=5)
    d.rectangle((40,35,1160,45),fill=GREEN)
    if event_page:
        d.text((80,115),"SYRIA",font=font(68,True),fill=CREAM)
        d.text((80,212),"LIBERATION",font=font(57,True),fill=CREAM)
        d.text((82,307),"CELEBRATION",font=font(43,True),fill=GOLD)
        d.text((83,402),"DEC 6, 2026  |  7:30 PM",font=font(26,True),fill="#ffffff")
        d.text((83,473),"Mississauga, Canada",font=font(28),fill="#dbe9e0")
        thumb=event.resize((380,380),Image.Resampling.LANCZOS)
        im.paste(thumb,(742,108))
    else:
        d.text((80,164),"FREE SYRIANS",font=font(67,True),fill=CREAM)
        d.text((83,278),"FreeSyrians.ca",font=font(41,True),fill=GOLD)
        d.rectangle((83,356,580,361),fill=GREEN)
        d.text((82,407),"Community, culture & events",font=font(27),fill="#d9eae3")
        part=ImageOps.contain(eagle,(410,395),Image.Resampling.LANCZOS)
        d.rounded_rectangle((688,93,1116,511),radius=28,fill="#f7f9f6")
        im.paste(part,(698+(408-part.width)//2,102+(401-part.height)//2))
    return im

art_card(False).save(ASSETS/"share-main.jpg",quality=82,subsampling=0,optimize=True,progressive=True)
art_card(True).save(ASSETS/"share-event-2026.jpg",quality=82,subsampling=0,optimize=True,progressive=True)
print("Generated",*[p.name for p in (ASSETS/"favicon-eagle.png", ASSETS/"favicon-event.png", ASSETS/"share-main.jpg", ASSETS/"share-event-2026.jpg")])
