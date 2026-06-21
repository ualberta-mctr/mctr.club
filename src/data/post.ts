import { type CollectionEntry, getCollection } from "astro:content";

/** Fetch all posts. Drafts are excluded in production builds. */
export async function getAllPosts(): Promise<CollectionEntry<"updates">[]> {
	return await getCollection("updates", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** Date used for sorting — uses `updatedDate` if available, else `publishDate`. */
export function getPostSortDate(post: CollectionEntry<"updates">): Date {
	return new Date(post.data.updatedDate ?? post.data.publishDate);
}

/** Sort by `getPostSortDate`, newest first. Mutates input. */
export function sortMDByDate(posts: CollectionEntry<"updates">[]): CollectionEntry<"updates">[] {
	return posts.sort((a, b) => {
		const aDate = getPostSortDate(a).valueOf();
		const bDate = getPostSortDate(b).valueOf();
		return bDate - aDate;
	});
}