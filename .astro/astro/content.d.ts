declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"how-cae-apple-vision-pro-app-is-revolutionazing-pilot-training.md": {
	id: "how-cae-apple-vision-pro-app-is-revolutionazing-pilot-training.md";
  slug: "how-cae-apple-vision-pro-app-is-revolutionazing-pilot-training";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"how-to-take-flight-for-the-first-time-and-ignite-your-career.md": {
	id: "how-to-take-flight-for-the-first-time-and-ignite-your-career.md";
  slug: "how-to-take-flight-for-the-first-time-and-ignite-your-career";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"the-role-of-technology-in-modern-flight-training.md": {
	id: "the-role-of-technology-in-modern-flight-training.md";
  slug: "the-role-of-technology-in-modern-flight-training";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};
"location": {
"aroma-park-il.md": {
	id: "aroma-park-il.md";
  slug: "aroma-park-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"bonfield-il.md": {
	id: "bonfield-il.md";
  slug: "bonfield-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"bourbonnais-il.md": {
	id: "bourbonnais-il.md";
  slug: "bourbonnais-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"bradley-il.md": {
	id: "bradley-il.md";
  slug: "bradley-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"chebanse-il.md": {
	id: "chebanse-il.md";
  slug: "chebanse-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"grant-park.md": {
	id: "grant-park.md";
  slug: "grant-park";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"herscher-il.md": {
	id: "herscher-il.md";
  slug: "herscher-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"kankakee-il.md": {
	id: "kankakee-il.md";
  slug: "kankakee-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"manteno-il.md": {
	id: "manteno-il.md";
  slug: "manteno-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"momence-il.md": {
	id: "momence-il.md";
  slug: "momence-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
"st-anne-il.md": {
	id: "st-anne-il.md";
  slug: "st-anne-il";
  body: string;
  collection: "location";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
