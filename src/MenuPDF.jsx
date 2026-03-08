import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#fffdf8",
    color: "#1e293b",
  },
  header: {
    marginBottom: 20,
    padding: 18,
    borderRadius: 12,
    backgroundColor: "#f1f5f9",
  },
  brandName: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 6,
  },
  tagline: {
    fontSize: 13,
    marginBottom: 8,
    color: "#334155",
  },
  message: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#475569",
  },
  categoryBlock: {
    marginBottom: 18,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1",
  },
  productGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  card: {
    width: "48%",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  imageBox: {
    height: 120,
    backgroundColor: "#ecfeff",
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imagePlaceholder: {
    fontSize: 10,
    color: "#64748b",
  },
  cardBody: {
    padding: 10,
  },
  productCategory: {
    fontSize: 8,
    textTransform: "uppercase",
    color: "#0891b2",
    marginBottom: 4,
  },
  productName: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 9,
    color: "#475569",
    lineHeight: 1.4,
    marginBottom: 8,
  },
  priceBox: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#f8fafc",
  },
  priceRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  priceLabel: {
    fontSize: 9,
    color: "#475569",
  },
  priceValue: {
    fontSize: 10,
    fontWeight: 700,
  },
  ecoRow: {
    marginTop: 4,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#d1fae5",
  },
  footer: {
    marginTop: 18,
    fontSize: 9,
    color: "#64748b",
    textAlign: "center",
  },
});

export default function MenuPDF({
  brandName,
  brandTagline,
  brandMessage,
  groupedProducts,
}) {
  return (
    <Document
      title={brandName}
      author="Antonio"
      subject="Menú de cafetería"
      keywords="menu,cafeteria,snacks,bebidas,pdf"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.brandName}>{brandName}</Text>
          <Text style={styles.tagline}>{brandTagline}</Text>
          <Text style={styles.message}>{brandMessage}</Text>
        </View>

        {Object.entries(groupedProducts).map(([category, items]) => (
          <View key={category} style={styles.categoryBlock}>
            <Text style={styles.categoryTitle}>{category}</Text>

            <View style={styles.productGrid}>
              {items.map((product) => (
                <View key={product.id} style={styles.card}>
                  <View style={styles.imageBox}>
                    {product.image ? (
                      <Image src={product.image} style={styles.productImage} />
                    ) : (
                      <Text style={styles.imagePlaceholder}>
                        Sin imagen
                      </Text>
                    )}
                  </View>

                  <View style={styles.cardBody}>
                    <Text style={styles.productCategory}>{product.category}</Text>
                    <Text style={styles.productName}>
                      {product.name || "Producto sin nombre"}
                    </Text>

                    <Text style={styles.productDescription}>
                      {product.description || "Sin descripción"}
                    </Text>

                    <View style={styles.priceBox}>
                      <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Regular</Text>
                        <Text style={styles.priceValue}>
                          ${product.priceRegular || "--"}
                        </Text>
                      </View>

                      <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Para llevar</Text>
                        <Text style={styles.priceValue}>
                          ${product.priceToGo || "--"}
                        </Text>
                      </View>

                      {product.ecoDiscount && (
                        <View style={[styles.priceRow, styles.ecoRow]}>
                          <Text style={styles.priceLabel}>Trae tu termo ♻</Text>
                          <Text style={styles.priceValue}>
                            ${product.priceEco || "--"}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}

        <Text style={styles.footer}>
          At this café, we believe that small changes make a big difference.
          If you bring your own containers, you reduce waste and get a special price on your purchases.
        </Text>
      </Page>
    </Document>
  );
}