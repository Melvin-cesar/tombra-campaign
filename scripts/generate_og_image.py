from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE_IMAGE = ROOT / "public" / "campaign" / "tombra-portrait.jpg"
OUTPUT_IMAGE = ROOT / "public" / "og-image.png"

CANVAS_SIZE = (2400, 1260)
FINAL_SIZE = (1200, 630)


def load_font(size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    names = (
        "Arial Bold.ttf",
        "Arial.ttf",
        "DejaVuSans-Bold.ttf",
        "DejaVuSans.ttf",
    )
    roots = (
        Path("/System/Library/Fonts/Supplemental"),
        Path("/Library/Fonts"),
        Path("/usr/share/fonts/truetype/dejavu"),
    )

    for root in roots:
        for name in names if bold else reversed(names):
            path = root / name
            if path.exists():
                return ImageFont.truetype(str(path), size)

    return ImageFont.load_default()


def draw_shadowed_text(
    canvas: Image.Image,
    position: tuple[int, int],
    text: str,
    font: ImageFont.FreeTypeFont,
    fill: str,
) -> None:
    shadow_layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow_layer)
    x, y = position
    shadow_draw.text((x + 5, y + 5), text, font=font, fill=(0, 0, 0, 105))
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(2))
    canvas.paste(shadow_layer.convert("RGB"), (0, 0), shadow_layer)
    ImageDraw.Draw(canvas).text(position, text, font=font, fill=fill)


def main() -> None:
    portrait = Image.open(SOURCE_IMAGE).convert("RGB")
    width, height = CANVAS_SIZE
    canvas = Image.new("RGB", CANVAS_SIZE, "#063f2a")
    draw = ImageDraw.Draw(canvas)

    draw.rectangle([0, 0, width, height], fill="#063f2a")
    draw.polygon([(0, 0), (960, 0), (780, height), (0, height)], fill="#083820")
    draw.polygon([(880, 0), (1220, 0), (1060, height), (720, height)], fill="#0a5a39")
    draw.polygon([(0, 980), (1160, 850), (width, 1000), (width, height), (0, height)], fill="#052f22")
    draw.rectangle([0, 0, 30, height], fill="#f7ce4f")

    frame_x, frame_y = 1240, 220
    frame_w, frame_h = 1120, 788
    shadow = Image.new("RGBA", (frame_w + 80, frame_h + 80), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle([28, 28, frame_w + 52, frame_h + 52], radius=42, fill=(0, 0, 0, 95))
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    canvas.paste(shadow.convert("RGB"), (frame_x - 40, frame_y - 40), shadow)

    portrait_large = portrait.resize((frame_w, frame_h), Image.Resampling.LANCZOS)
    mask = Image.new("L", (frame_w, frame_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, frame_w, frame_h], radius=42, fill=255)
    canvas.paste(portrait_large, (frame_x, frame_y), mask)
    draw.rounded_rectangle(
        [frame_x - 8, frame_y - 8, frame_x + frame_w + 8, frame_y + frame_h + 8],
        radius=50,
        outline="#f7ce4f",
        width=10,
    )

    draw.rounded_rectangle([136, 150, 492, 168], radius=9, fill="#f7ce4f")
    draw_shadowed_text(canvas, (136, 245), "TOMBRA 2027", load_font(66), "#f7ce4f")
    draw_shadowed_text(canvas, (136, 420), "Tombra", load_font(168), "#ffffff")
    draw_shadowed_text(canvas, (136, 585), "Mohammed", load_font(168), "#ffffff")
    draw_shadowed_text(canvas, (144, 785), "A Stronger Voice for", load_font(72), "#ffffff")
    draw_shadowed_text(canvas, (144, 900), "Bayelsa West", load_font(102), "#f7ce4f")

    badge_x, badge_y, badge_w, badge_h = 136, 1068, 820, 108
    draw.rounded_rectangle([badge_x, badge_y, badge_x + badge_w, badge_y + badge_h], radius=54, fill="#ffffff")
    badge_text = f"Jobs {chr(8226)} Representation {chr(8226)} Grassroots"
    draw.text(
        (badge_x + 78, badge_y + 30),
        badge_text,
        font=load_font(42),
        fill="#07543a",
    )

    final = canvas.resize(FINAL_SIZE, Image.Resampling.LANCZOS)
    final.save(OUTPUT_IMAGE, optimize=True)

    print(f"Source: {SOURCE_IMAGE.relative_to(ROOT)} ({portrait.width}x{portrait.height})")
    print(f"Output: {OUTPUT_IMAGE.relative_to(ROOT)} ({FINAL_SIZE[0]}x{FINAL_SIZE[1]})")
    print(f"Size: {OUTPUT_IMAGE.stat().st_size} bytes")


if __name__ == "__main__":
    main()
