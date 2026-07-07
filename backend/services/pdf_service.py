from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import os


def generate_pdf(title, content):

    os.makedirs("generated_pdfs", exist_ok=True)

    filename = title.replace(" ", "_") + ".pdf"

    filepath = os.path.join("generated_pdfs", filename)

    doc = SimpleDocTemplate(filepath)

    styles = getSampleStyleSheet()

    story = []

    story.append(Paragraph(f"<b>{title}</b>", styles["Title"]))

    story.append(Paragraph(content.replace("\n", "<br/>"), styles["BodyText"]))

    doc.build(story)

    return filepath