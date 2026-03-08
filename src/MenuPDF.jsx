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
    paddingTop: 26,
    paddingBottom: 24,
    paddingHorizontal: 24,
    fontSize: 10,
    fontFamily: "Helvetica",
    backgroundColor: "#fffaf4",
    color: "#1f2937",
  },

  topAccent: {
    height: 10,
    backgroundColor: "#f59e0b",
    borderRadius: 8,
    marginBottom: 10,
  },

  header: {
  backgroundColor: "#fff1dc",
  borderRadius: 18,
  paddingVertical: 18,
  paddingHorizontal: 18,
  marginBottom: 18,
  borderWidth: 1,
  borderColor: "#f5d9a8",
  flexShrink: 0,
  minHeight: 105,
},

  brandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
    flexShrink: 0,
  },

  brandLeft: {
    width: "72%",
    flexShrink: 0,
  },

  brandRight: {
    width: "24%",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#f3e8d7",
    flexShrink: 0,
  },

  badgeSmall: {
    fontSize: 8,
    textTransform: "uppercase",
    color: "#b45309",
    marginBottom: 5,
    letterSpacing: 1,
  },

  brandName: {
    fontSize: 24,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 5,
  },

  tagline: {
    fontSize: 12,
    color: "#374151",
    marginBottom: 8,
    lineHeight: 1.4,
  },

  message: {
    fontSize: 9,
    color: "#6b7280",
    lineHeight: 1.5,
  },

  rightCardTitle: {
    fontSize: 8,
    textTransform: "uppercase",
    color: "#16a34a",
    marginBottom: 4,
    letterSpacing: 1,
  },

  rightCardText: {
    fontSize: 10,
    fontWeight: 700,
    color: "#166534",
    lineHeight: 1.4,
  },

  sectionDivider: {
    marginBottom: 12,
  },

  categoryHeader: {
  backgroundColor: "#1f2937",
  borderRadius: 14,
  paddingVertical: 8,
  paddingHorizontal: 12,
  marginBottom: 10,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

  categoryTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  categoryCount: {
    fontSize: 8,
    color: "#d1d5db",
    marginTop: 2,
  },

  categoryBlock: {
    marginBottom: 16,
  },

  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48.3%",
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#efe7dc",
  },

imageBox: {
  height: 95,
  backgroundColor: "#f3f4f6",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  borderBottomWidth: 1,
  borderBottomColor: "#f1f5f9",
},

productImageBg: {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: 0.22,
},

productImage: {
  width: "100%",
  height: "100%",
  objectFit: "contain",
},

  imagePlaceholder: {
    fontSize: 9,
    color: "#94a3b8",
  },

  cardBody: {
    padding: 10,
  },

  categoryPill: {
    alignSelf: "flex-start",
    backgroundColor: "#ecfeff",
    color: "#0f766e",
    fontSize: 7,
    textTransform: "uppercase",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 999,
    marginBottom: 6,
  },

  productName: {
    fontSize: 12,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 4,
  },

  productDescription: {
    fontSize: 8.7,
    color: "#6b7280",
    lineHeight: 1.45,
    minHeight: 28,
    marginBottom: 8,
  },

  priceBox: {
    backgroundColor: "#faf7f2",
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#f0e6d8",
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  priceLabel: {
    fontSize: 8.5,
    color: "#6b7280",
  },

  priceValue: {
    fontSize: 9.5,
    fontWeight: 700,
    color: "#111827",
  },

  ecoRow: {
    marginTop: 2,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#d1fae5",
  },

  ecoLabel: {
    fontSize: 8.5,
    color: "#15803d",
    fontWeight: 700,
  },

  ecoValue: {
    fontSize: 9.5,
    color: "#166534",
    fontWeight: 700,
  },

  footerBox: {
    marginTop: 8,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eadfce",
  },

  footer: {
    fontSize: 8.5,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 1.5,
  },

  footerHighlight: {
    color: "#15803d",
    fontWeight: 700,
  },
});

export default function MenuPDF({
  brandName,
  brandTagline,
  brandMessage,
  groupedProducts,
}) {
  const entries = Object.entries(groupedProducts);

  return (
    <Document
      title={brandName}
      author="Antonio"
      subject="Menú de cafetería"
      keywords="menu,cafeteria,snacks,bebidas,pdf"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.topAccent} />

        <View style={styles.header}>
          <View style={styles.brandRow}>
            <View style={styles.brandLeft}>
              <Text style={styles.badgeSmall}>Student coffee menu</Text>
              <Text style={styles.brandName}>{brandName}</Text>
              <Text style={styles.tagline}>{brandTagline}</Text>
              <Text style={styles.message}>{brandMessage}</Text>
            </View>

            <View style={styles.brandRight}>
              <Text style={styles.rightCardTitle}>Eco price</Text>

            </View>
          </View>
        </View>

        {entries.map(([category, items]) => (
          <View key={category} style={styles.categoryBlock}>
            <View style={styles.sectionDivider}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{category}</Text>
                <Text style={styles.categoryCount}>
                  {items.length} product{items.length > 1 ? "s" : ""}
                </Text>
              </View>
            </View>

            <View style={styles.productGrid}>
              {items.map((product) => (
                <View key={product.id} style={styles.card} wrap={false}>
                  <View style={styles.imageBox}>
                    {product.image ? (
                      <>
                        <Image src={product.image} style={styles.productImageBg} />
                        <Image src={product.image} style={styles.productImage} />
                      </>
                    ) : (
                      <Text style={styles.imagePlaceholder}>No image</Text>
                    )}
                  </View>

                  <View style={styles.cardBody}>
                    <Text style={styles.categoryPill}>{product.category}</Text>

                    <Text style={styles.productName}>
                      {product.name || "Unnamed product"}
                    </Text>

                    <Text style={styles.productDescription}>
                      {product.description || "No description available."}
                    </Text>

                    <View style={styles.priceBox}>
                      <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Regular</Text>
                        <Text style={styles.priceValue}>
                          ${product.priceRegular || "--"}
                        </Text>
                      </View>

                      <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Take Away</Text>
                        <Text style={styles.priceValue}>
                          ${product.priceToGo || "--"}
                        </Text>
                      </View>

                      {product.ecoDiscount && (
                        <View style={[styles.priceRow, styles.ecoRow]}>
                          <Text style={styles.ecoLabel}>
                            Bring your containers
                          </Text>
                          <Text style={styles.ecoValue}>
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

        <View style={styles.footerBox}>
          <Text style={styles.footer}>
            At this café, we believe that small changes make a big difference.{" "}
            <Text style={styles.footerHighlight}>
              Bring your own containers
            </Text>{" "}
            to reduce waste and enjoy a special price on your purchases.
          </Text>
        </View>
      </Page>
    </Document>
  );
}