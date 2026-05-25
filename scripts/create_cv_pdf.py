from pathlib import Path

content = "Curriculo de Carlos Henrique da Silva Cunha"
objects = []
objects.append(b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R>>\nendobj\n")
objects.append(b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1>>\nendobj\n")
objects.append(b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n")
stream = b"BT\n/F1 24 Tf\n100 700 Td\n(" + content.encode('latin1') + b") Tj\nET\n"
objects.append(b"4 0 obj\n<< /Length %d >>\nstream\n" % len(stream) + stream + b"endstream\nendobj\n")
objects.append(b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")

pdf = b"%PDF-1.4\n"
offsets = []
current = len(pdf)
for obj in objects:
    offsets.append(current)
    pdf += obj
    current = len(pdf)

xref = b"xref\n0 %d\n0000000000 65535 f \n" % (len(objects) + 1)
for off in offsets:
    xref += b"%010d 00000 n \n" % off

trailer = b"trailer\n<< /Size %d /Root 1 0 R >>\n" % (len(objects) + 1)
startxref = b"startxref\n%d\n%%EOF\n" % len(pdf)
pdf += xref + trailer + startxref

Path("public").mkdir(exist_ok=True)
Path("public/Carlos-Henrique-CV.pdf").write_bytes(pdf)
print("created public/Carlos-Henrique-CV.pdf")
