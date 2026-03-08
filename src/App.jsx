import { PDFDownloadLink } from "@react-pdf/renderer";
import MenuPDF from "./MenuPDF";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Plus,
  Trash2,
  Printer,
  LeafyGreen,
  Coffee,
  Sparkles,
} from "lucide-react";

const categoryOptions = [
  "Drinks", 
  "Snacks",
  "Desserts",
  "Otros",
  "Bebidas calientes",
  "Bebidas frías",
  "Snacks dulces",
  "Snacks salados",
];

const createEmptyProduct = () => ({
  id: crypto.randomUUID(),
  name: "",
  description: "",
  category: "Drinks",
  priceRegular: "",
  priceToGo: "",
  priceEco: "",
  ecoDiscount: false,
  image: "",
});

const initialProducts = [
  {
    id: crypto.randomUUID(),
    name: "Matcha Latte",
    description: "Cremoso, suave y perfecto para una pausa entre clases.",
    category: "Drinks",
    priceRegular: "65",
    priceToGo: "60",
    priceEco: "55",
    ecoDiscount: true,
    image: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Iced Coffee",
    description: "Refrescante y con energía para seguir el día.",
    category: "Drinks",
    priceRegular: "58",
    priceToGo: "55",
    priceEco: "50",
    ecoDiscount: true,
    image: "",
  },
  {
    id: crypto.randomUUID(),
    name: "Croissant de jamón y queso",
    description: "Snack rápido, calientito y muy práctico.",
    category: "Snacks",
    priceRegular: "48",
    priceToGo: "48",
    priceEco: "",
    ecoDiscount: false,
    image: "",
  },
];

function ProductForm({ product, onChange, onRemove }) {
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onChange(product.id, "image", String(reader.result));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="rounded-3xl bg-white/85 p-5 shadow-lg shadow-black/5 border border-white/60">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-500">Producto</p>
          <h3 className="text-lg font-bold text-slate-900">
            {product.name || "Nuevo producto"}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => onRemove(product.id)}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <Trash2 className="h-4 w-4" />
          Eliminar
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Nombre
          </label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => onChange(product.id, "name", e.target.value)}
            placeholder="Ej. Latte de vainilla"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Categoría
          </label>
          <select
            value={product.category}
            onChange={(e) => onChange(product.id, "category", e.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Descripción
        </label>
        <textarea
          value={product.description}
          onChange={(e) => onChange(product.id, "description", e.target.value)}
          placeholder="Describe el producto en una línea corta"
          className="min-h-[90px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Precio regular
          </label>
          <input
            type="text"
            value={product.priceRegular}
            onChange={(e) =>
              onChange(product.id, "priceRegular", e.target.value)
            }
            placeholder="65"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Precio para llevar
          </label>
          <input
            type="text"
            value={product.priceToGo}
            onChange={(e) => onChange(product.id, "priceToGo", e.target.value)}
            placeholder="60"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Precio con termo
          </label>
          <input
            type="text"
            value={product.priceEco}
            onChange={(e) => onChange(product.id, "priceEco", e.target.value)}
            placeholder="55"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
          <input
            type="checkbox"
            checked={product.ecoDiscount}
            onChange={(e) =>
              onChange(product.id, "ecoDiscount", e.target.checked)
            }
          />
          Aplicar descuento ecológico
        </label>

        <label className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
          <Upload className="h-4 w-4" />
          Subir foto
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-lg shadow-black/5"
    >
      <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-emerald-100 via-cyan-50 to-orange-50">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-slate-400">
            <Coffee className="mb-3 h-10 w-10" />
            <p className="text-sm font-medium">Agrega una foto del producto</p>
          </div>
        )}

        {product.ecoDiscount && (
          <div className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
            <span className="inline-flex items-center gap-1">
              <LeafyGreen className="h-3.5 w-3.5" />
              Pay less with your container
            </span>
          </div>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600">
            {product.category}
          </p>
          <h3 className="mt-2 text-xl font-black text-slate-900">
            {product.name || "Producto sin nombre"}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {product.description ||
              "Escribe una descripción breve para que el menú se vea atractivo."}
          </p>
        </div>

        <div className="grid gap-2 rounded-3xl bg-slate-50 p-3 text-sm">
          <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2">
            <span className="font-medium text-slate-600">Regular</span>
            <span className="text-base font-black text-slate-900">
              ${product.priceRegular || "--"}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2">
            <span className="font-medium text-slate-600">Take Away</span>
            <span className="text-base font-black text-slate-900">
              ${product.priceToGo || "--"}
            </span>
          </div>

          {product.ecoDiscount && (
            <div className="flex items-center justify-between rounded-2xl bg-emerald-50 px-3 py-2">
              <span className="font-semibold text-emerald-700">
                Bring your containers ♻
              </span>
              <span className="text-base font-black text-emerald-700">
                ${product.priceEco || "--"}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [brandName, setBrandName] = useState("Cravings Coffee");
  const [brandTagline, setBrandTagline] = useState(
    "Brewed for your cravings"
  );
  const [brandMessage, setBrandMessage] = useState(
    "Bring your reusable container. Pay less. Enjoy more. More coffee, less impact."
  );
  const [products, setProducts] = useState(initialProducts);

  const groupedProducts = useMemo(() => {
    const grouped = {};

    for (const category of categoryOptions) {
      const items = products.filter(
        (item) => item.category === category && item.name.trim() !== ""
      );
      if (items.length > 0) grouped[category] = items;
    }

    return grouped;
  }, [products]);

  const handleProductChange = (id, field, value) => {
    setProducts((current) =>
      current.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addProduct = () => {
    setProducts((current) => [...current, createEmptyProduct()]);
  };

  const removeProduct = (id) => {
    setProducts((current) => current.filter((item) => item.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_25%),radial-gradient(circle_at_right,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(180deg,_#fffdf7,_#f8fafc)] text-slate-900 print:bg-white">
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-6 lg:grid-cols-[420px_1fr] lg:px-6">
        <aside className="no-print space-y-6 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-[32px] border border-white/60 bg-white/85 p-6 shadow-xl shadow-black/5">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 p-3 text-white shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Generador Menú
                </p>
                <h1 className="text-2xl font-black tracking-tight text-slate-900">
                  Menú para cafetería
                </h1>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Nombre de la marca
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Frase principal
                </label>
                <input
                  type="text"
                  value={brandTagline}
                  onChange={(e) => setBrandTagline(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Mensaje marca
                </label>
                <textarea
                  value={brandMessage}
                  onChange={(e) => setBrandMessage(e.target.value)}
                  className="min-h-[90px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={addProduct}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-800"
              >
                <Plus className="h-4 w-4" />
                Agregar producto
              </button>

              <PDFDownloadLink
                document={
                  <MenuPDF
                    brandName={brandName}
                    brandTagline={brandTagline}
                    brandMessage={brandMessage}
                    groupedProducts={groupedProducts}
                  />
                }
                fileName={`${brandName.replace(/\s+/g, "-").toLowerCase()}-menu.pdf`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                {({ loading }) => (
                  <>
                    <Printer className="h-4 w-4" />
                    {loading ? "Generando PDF..." : "Descargar PDF real"}
                  </>
                )}
              </PDFDownloadLink>

            </div>
          </div>

          <div className="space-y-4">
            {products.map((product) => (
              <ProductForm
                key={product.id}
                product={product}
                onChange={handleProductChange}
                onRemove={removeProduct}
              />
            ))}
          </div>
        </aside>

        <main>
          <div className="overflow-hidden rounded-[36px] border border-white/60 bg-white/80 shadow-2xl shadow-black/5 print:rounded-none print:border-0 print:shadow-none">
            <section className="relative overflow-hidden px-6 py-10 sm:px-10">
              <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
              <div className="absolute right-0 top-8 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
                <div>
                  <div className="mb-4 inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                    Menu
                  </div>

                  <h2 className="max-w-2xl text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
                    {brandName}
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg font-medium text-slate-600 sm:text-xl">
                    {brandTagline}
                  </p>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                    {brandMessage}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900 p-5 text-white">
                    <p className="text-sm text-white/70">Ideal for</p>
                    <p className="mt-2 text-lg font-bold">Take Away</p>
                  </div>

                  <div className="rounded-3xl bg-emerald-50 p-5 text-emerald-800">
                    <p className="text-sm text-emerald-700">Benefit</p>
                    <p className="mt-2 text-lg font-bold">Bring your containers ♻</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-10 px-6 pb-10 sm:px-10">
              {Object.keys(groupedProducts).length === 0 ? (
                <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
                  <Coffee className="mx-auto h-10 w-10 text-slate-400" />
                  <h3 className="mt-4 text-2xl font-bold text-slate-800">
                    Menu
                  </h3>
                  <p className="mt-2 text-slate-500">
                    Agrega nombre, precios y foto a tus productos para generar la
                    plantilla final.
                  </p>
                </div>
              ) : (
                Object.entries(groupedProducts).map(([category, items]) => (
                  <div key={category} className="space-y-5">
                    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                      <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                        {category}
                      </h3>
                      <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                        {items.length} producto{items.length > 1 ? "s" : ""}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}