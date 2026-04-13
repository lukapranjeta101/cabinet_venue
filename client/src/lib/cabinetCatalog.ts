type CabinetImage = {
  src: string;
  title: string;
  path: string;
};

export type CabinetCollection = {
  name: string;
  images: CabinetImage[];
};

export type CabinetBrand = {
  slug: string;
  name: string;
  folderName: string;
  description: string;
  overview: string;
  collections: CabinetCollection[];
  imageCount: number;
  previewImage?: string;
};

type CabinetBrandDefinition = {
  slug: string;
  name: string;
  folderName: string;
  description: string;
  overview: string;
  defaultCollectionName: string;
  images: Record<string, string>;
};

const aigaCabinets = {
  ...import.meta.glob("/AIGA */*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob("/AIGA */**/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
} as Record<string, string>;

const choiceCabinets = {
  ...import.meta.glob("/Choice Cabinet/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob("/Choice Cabinet/**/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
} as Record<string, string>;

const cncCabinets = {
  ...import.meta.glob("/CNC Cabinetry/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob("/CNC Cabinetry/**/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
} as Record<string, string>;

const proCraftCabinets = {
  ...import.meta.glob("/PRO CRAFT/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob("/PRO CRAFT/**/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
} as Record<string, string>;

const rocCabinets = {
  ...import.meta.glob("/ROC Cabinetry/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob("/ROC Cabinetry/**/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
} as Record<string, string>;

const taCabinets = {
  ...import.meta.glob("/Ta Cabinetry/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob("/Ta Cabinetry/**/*.{jpg,jpeg,png,webp,avif,gif}", {
    eager: true,
    import: "default",
  }),
} as Record<string, string>;

const cabinetBrandDefinitions: CabinetBrandDefinition[] = [
  {
    slug: "aiga",
    name: "AIGA",
    folderName: "AIGA",
    description: "Contemporary, traditional, and transitional looks with a refined painted palette.",
    overview:
      "AIGA offers curated cabinet collections for homeowners who want flexible styling across classic and modern spaces.",
    defaultCollectionName: "Collections",
    images: aigaCabinets,
  },
  {
    slug: "choice-cabinet",
    name: "Choice Cabinet",
    folderName: "Choice Cabinet",
    description: "A clean lineup of versatile finishes suited for bright, practical kitchen and bath layouts.",
    overview:
      "Choice Cabinet focuses on approachable shaker-inspired finishes that work well in remodels, flips, and everyday family homes.",
    defaultCollectionName: "Finishes",
    images: choiceCabinets,
  },
  {
    slug: "cnc-cabinetry",
    name: "CNC Cabinetry",
    folderName: "CNC Cabinetry",
    description: "A broad catalog of door styles and finishes ranging from warm traditional tones to crisp modern colors.",
    overview:
      "CNC Cabinetry gives you one of the deepest selections on the site, with multiple collections and finish families to compare side by side.",
    defaultCollectionName: "Collections",
    images: cncCabinets,
  },
];

const rocBrandDefinition: CabinetBrandDefinition = {
  slug: "roc-cabinetry",
  name: "ROC Cabinetry",
  folderName: "ROC Cabinetry",
  description: "A wide mix of painted, wood-tone, inset, and euro-style options arranged to match ROC’s official product structure.",
  overview:
    "ROC Cabinetry now mirrors the official series layout, with finishes grouped under Belmont, Classic, Escada, Shaker, Inset, Newtown, Euro Deluxe, and Closet collections.",
  defaultCollectionName: "Door Styles",
  images: rocCabinets,
};

const proCraftBrandDefinition: CabinetBrandDefinition = {
  slug: "pro-craft",
  name: "PRO CRAFT",
  folderName: "PRO CRAFT",
  description: "Framed shaker favorites, contemporary slim profiles, and Milania frameless options grouped to match ProCraft’s product lineup.",
  overview:
    "PRO CRAFT now follows ProCraft Cabinetry’s public catalog structure, separating Signature Series framed styles, Milania frameless finishes, and the newer profile/material programs.",
  defaultCollectionName: "Door Styles",
  images: proCraftCabinets,
};

const taBrandDefinition: CabinetBrandDefinition = {
  slug: "ta-cabinetry",
  name: "Ta Cabinetry",
  folderName: "Ta Cabinetry",
  description: "Official TA Cabinetry finish names organized around the Timeless Shaker collection shown on the current TA catalog.",
  overview:
    "This page now uses TA Cabinetry’s published 2025 product naming so the local uploads match the official Timeless Shaker series finishes.",
  defaultCollectionName: "Finishes",
  images: taCabinets,
};

type CuratedCollectionDefinition = {
  name: string;
  items: Array<{
    label: string;
    match: string;
  }>;
};

const rocCollectionDefinitions: CuratedCollectionDefinition[] = [
  {
    name: "Shaker Series",
    items: [
      { label: "Shaker White", match: "421026876 sw sample door 3" },
      { label: "Shaker Origami White", match: "sow sample door 1" },
      { label: "Shaker Gray Finish", match: "421026873 sgf sd" },
      { label: "Shaker Gray", match: "sg" },
      { label: "Pebble Gray", match: "421026847 pg sd" },
      { label: "Shaker Natural Wood", match: "microsoftteams image 2" },
      { label: "Charcoal Black Shaker", match: "picture1 1" },
      { label: "Shaker Jade Green", match: "sjg 3 1" },
      { label: "Shaker Cotton Oak", match: "sco 1 1" },
    ],
  },
  {
    name: "Inset Series",
    items: [
      { label: "Inset Origami White", match: "iow 1 1 1" },
      { label: "Inset Truffle Brown", match: "microsoftteams image 41 1" },
      { label: "Inset Hazelnut Oak", match: "iho 1" },
    ],
  },
  {
    name: "Escada Series",
    items: [
      { label: "Escada White", match: "421026841 ew" },
      { label: "Escada Dove", match: "421026836 ed sd" },
      { label: "Escada Vintage Wood", match: "421028464 evw sd 2" },
      { label: "Escada Midnight Blue", match: "img 4199" },
    ],
  },
  {
    name: "Newtown Series",
    items: [
      { label: "Newtown Origami White", match: "now" },
      { label: "Newtown Charcoal Black", match: "ncb" },
      { label: "Newtown Jade Green", match: "njg 2 1 1" },
      { label: "Newtown Silver Gray", match: "nsg coming soon new 1" },
      { label: "Newtown Lakeside Blue", match: "nlb 1 1 1" },
    ],
  },
  {
    name: "Belmont Series",
    items: [
      { label: "Belmont Gray", match: "bg 1" },
      { label: "Belmont White", match: "bw" },
    ],
  },
  {
    name: "Classic Series",
    items: [
      { label: "Classic White", match: "roc classic white 2" },
      { label: "Classic Chocolate", match: "421025022 cc sample door 2" },
    ],
  },
  {
    name: "Euro Deluxe Series: Kit Products",
    items: [
      { label: "Matt White", match: "matt white 1 2 1 1" },
      { label: "Matt Gray", match: "matt gray 1 2 1 1" },
      { label: "Matt Blue", match: "matt blue 1 2 1 1" },
      { label: "Glossy White", match: "gw 3 1" },
      { label: "Walnut", match: "walnut 1 2 1 1" },
    ],
  },
  {
    name: "Euro Deluxe Series: Components",
    items: [
      { label: "Matt White Door Panels", match: "matt white 1 1 1" },
      { label: "Matt Gray Door Panels", match: "matt gray 1 1" },
      { label: "Matt Blue Door Panels", match: "matt blue 2 1 1" },
      { label: "Glossy White Door Panels", match: "gw 1 1 1" },
      { label: "Walnut Door Panels", match: "walnut 1 1 1" },
    ],
  },
  {
    name: "Closet Series",
    items: [
      { label: "Slate Oak", match: "cso sampledoor" },
      { label: "Ashton Oak", match: "cao sample door" },
      { label: "Soft White", match: "csw sample door 1" },
    ],
  },
];

const proCraftCollectionDefinitions: CuratedCollectionDefinition[] = [
  {
    name: "ProCraft Signature Series",
    items: [
      { label: "Arlington Oatmeal", match: "pcc procraftseries arlingtondoor min 1 2184514" },
      { label: "Essence Cemento", match: "essence door new 2184513" },
      { label: "Liberty Shaker Ashen", match: "shaker ashen 8393311" },
      { label: "Liberty Shaker Espresso", match: "pcc procraftseries lse min 2 2184515" },
      { label: "Liberty Shaker Grey", match: "liberty shaker grey door 2184513" },
      { label: "Liberty Shaker Karamel", match: "final lsk copy 6561259" },
      { label: "Liberty Shaker Oatmeal", match: "lso liberty shaker oatmeal 2982731" },
      { label: "Liberty Shaker Rift", match: "lsr copy 2632384" },
      { label: "Newport Millstone", match: "nme 5661859" },
      { label: "Windsor Ashen", match: "wa windsor ashen 2184516" },
    ],
  },
  {
    name: "Slim Shaker Collection",
    items: [
      { label: "Slim Shaker Karamel", match: "ssk 2533503" },
      { label: "Slim Shaker Oatmeal", match: "sso 1314361" },
      { label: "Slim Shaker Rift-Oak Wash", match: "slim shaker rift oak wash 720x1200 4542958" },
    ],
  },
  {
    name: "Milania Frameless Series",
    items: [
      { label: "Forest Green Matte", match: "forest green matte 4460147" },
      { label: "Olmo Gloss", match: "olmo gloss 4460305" },
      { label: "Picasso Textured", match: "picasso 4480780" },
      { label: "Lincoln Oak", match: "lincoln oak 4447850" },
    ],
  },
  {
    name: "Milania 3DL SuperMatte Profiles",
    items: [
      { label: "Reeded Slim Shaker - SuperMatte 3DL", match: "reeded slim shaker super matte 3dl 2639207" },
      { label: "Shaker 1 Piece - SuperMatte 3DL", match: "shaker 1 piece super matte 3dl 2639207" },
      { label: "Shaker Bevel - SuperMatte 3DL", match: "shaker bevel super matte 3dl 2639207" },
      { label: "Slab - SuperMatte 3DL", match: "slab super matte 3dl 2639207" },
      { label: "Slim Shaker - SuperMatte 3DL", match: "slim shaker supermatte 3dl 2639208" },
    ],
  },
  {
    name: "Milania 3DL Woodgrain Profiles",
    items: [
      { label: "Reeded Slim Shaker - Woodgrain 3DL", match: "reeded slim shaker woodgrain 3dl 2639207" },
      { label: "Shaker 5 Piece - Woodgrain 3DL", match: "shaker 5 piece woodgrain 3dl 2639207" },
      { label: "Slab - Woodgrain 3DL", match: "slab woodgrain 3dl 2639207" },
      { label: "Slim Shaker - Woodgrain 3DL", match: "slim shaker woodgrain 3dl 2639208" },
    ],
  },
];

const taCollectionDefinitions: CuratedCollectionDefinition[] = [
  {
    name: "Timeless Shaker Series",
    items: [
      { label: "Dove", match: "tsd" },
      { label: "Karamel", match: "tsk scaled" },
      { label: "Gray", match: "tsg scaled" },
      { label: "White", match: "tsw scaled" },
      { label: "Blue", match: "tsb scaled" },
      { label: "Charcoal Black", match: "tsc 1 1 scaled" },
    ],
  },
];

function titleCase(value: string) {
  return value
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatSegment(value: string) {
  const trimmedValue = value.trim();

  if (trimmedValue === "5") {
    return "5 Piece";
  }

  if (trimmedValue.toLowerCase() === "reg") {
    return "Regular";
  }

  return titleCase(trimmedValue.replace(/[-_]+/g, " "));
}

function formatImageName(fileName: string) {
  return titleCase(
    fileName
      .replace(/\.[^/.]+$/, "")
      .replace(/\s*\(\d+\)$/, "")
      .replace(/_\d{4}-\d{2}-\d{2}-\d{6}_[a-z0-9]+$/i, "")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function normalizeFileKey(fileName: string) {
  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/\s*\(\d+\)$/, "")
    .replace(/_\d{4}-\d{2}-\d{2}-\d{6}_[a-z0-9]+$/i, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getNormalizedAssetKey(path: string) {
  const fileName = path.split("/").pop() ?? path;
  return normalizeFileKey(fileName);
}

function sortCollectionImages(brandSlug: string, collectionName: string, images: CabinetImage[]) {
  if (brandSlug === "cnc-cabinetry") {
    const priorityOrderByCollection = {
      Elegant: new Map([
        ["elegant smoky grey", 0],
        ["elegant stone", 1],
        ["elegant white", 2],
        ["elegant ocean", 3],
      ]),
      Fashion: new Map([
        ["fashion blue", 0],
        ["fashion white", 1],
      ]),
      Newport: new Map([
        ["newport white", 0],
      ]),
      Richmond: new Map([
        ["richmond stone", 0],
        ["richmond white", 1],
      ]),
      Sydney: new Map([
        ["sydney white", 0],
      ]),
    } as const;

    const priorityOrder = priorityOrderByCollection[collectionName as keyof typeof priorityOrderByCollection];

    if (!priorityOrder) {
      return images;
    }

    return [...images].sort((leftImage, rightImage) => {
      const leftPriority = priorityOrder.get(normalizeFileKey(leftImage.title)) ?? Number.MAX_SAFE_INTEGER;
      const rightPriority = priorityOrder.get(normalizeFileKey(rightImage.title)) ?? Number.MAX_SAFE_INTEGER;

      if (leftPriority !== rightPriority) {
        return leftPriority - rightPriority;
      }

      return leftImage.title.localeCompare(rightImage.title);
    });
  }

  return images;
}

function buildCabinetBrand(definition: CabinetBrandDefinition): CabinetBrand {
  const collectionMap = new Map<string, CabinetImage[]>();
  const seenImages = new Set<string>();

  Object.entries(definition.images)
    .filter(([path]) => !path.includes(".DS_Store"))
    .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
    .forEach(([path, src]) => {
      const segments = path.split("/").filter(Boolean);
      const fileName = segments.at(-1);

      if (!fileName) {
        return;
      }

      const collectionSegments = segments.slice(1, -1).map(formatSegment).filter(Boolean);
      const collectionName = collectionSegments.length > 0 ? collectionSegments.join(" / ") : definition.defaultCollectionName;
      const normalizedKey = `${collectionName}:${normalizeFileKey(fileName)}`;

      if (seenImages.has(normalizedKey)) {
        return;
      }

      seenImages.add(normalizedKey);

      const collectionImages = collectionMap.get(collectionName) ?? [];
      collectionImages.push({
        src,
        title: formatImageName(fileName),
        path,
      });
      collectionMap.set(collectionName, collectionImages);
    });

  const collections = Array.from(collectionMap.entries()).map(([name, images]) => ({
    name,
    images: sortCollectionImages(definition.slug, name, images),
  }));

  return {
    slug: definition.slug,
    name: definition.name,
    folderName: definition.folderName,
    description: definition.description,
    overview: definition.overview,
    collections,
    imageCount: collections.reduce((count, collection) => count + collection.images.length, 0),
    previewImage: collections[0]?.images[0]?.src,
  };
}

function buildCuratedCabinetBrand(
  definition: CabinetBrandDefinition,
  collectionDefinitions: CuratedCollectionDefinition[],
): CabinetBrand {
  const uniqueAssets = new Map<string, { src: string; path: string }>();

  Object.entries(definition.images)
    .filter(([path]) => !path.includes(".DS_Store"))
    .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
    .forEach(([path, src]) => {
      const normalizedKey = getNormalizedAssetKey(path);
      if (!uniqueAssets.has(normalizedKey)) {
        uniqueAssets.set(normalizedKey, { src, path });
      }
    });

  const collections = collectionDefinitions
    .map((collection) => ({
      name: collection.name,
      images: collection.items
        .map((item) => {
          const asset = uniqueAssets.get(item.match);

          if (!asset) {
            return null;
          }

          return {
            src: asset.src,
            title: item.label,
            path: asset.path,
          };
        })
        .filter((image): image is CabinetImage => image !== null),
    }))
    .filter((collection) => collection.images.length > 0);

  return {
    slug: definition.slug,
    name: definition.name,
    folderName: definition.folderName,
    description: definition.description,
    overview: definition.overview,
    collections,
    imageCount: collections.reduce((count, collection) => count + collection.images.length, 0),
    previewImage: collections[0]?.images[0]?.src,
  };
}

export const cabinetBrands = [
  ...cabinetBrandDefinitions.map(buildCabinetBrand),
  buildCuratedCabinetBrand(proCraftBrandDefinition, proCraftCollectionDefinitions),
  buildCuratedCabinetBrand(rocBrandDefinition, rocCollectionDefinitions),
  buildCuratedCabinetBrand(taBrandDefinition, taCollectionDefinitions),
];

export const cabinetBrandsBySlug = Object.fromEntries(
  cabinetBrands.map((brand) => [brand.slug, brand]),
) as Record<string, CabinetBrand>;

export const cabinetBrandLinks = cabinetBrands.map((brand) => ({
  href: `/cabinets/${brand.slug}`,
  label: brand.name,
}));

export const customCabinetLink = {
  href: "/cabinets/custom-build",
  label: "Custom Build",
};

export const cabinetSectionLinks = [...cabinetBrandLinks, customCabinetLink];
