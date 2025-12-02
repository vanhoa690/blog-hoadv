// // src/utils/posts.ts
// import { getCollection } from "astro:content";

// export async function getAllPublishedPosts() {
//   const allPosts = await getCollection("posts");

//   return allPosts
//     .filter((post) => !post.data.draft)
//     .sort(
//       (a, b) =>
//         new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
//     );
// }

// export async function getPostsByTag(tag: string) {
//   const posts = await getAllPublishedPosts();

//   return posts.filter((post) =>
//     post.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
//   );
// }

// export async function getAllTags() {
//   const posts = await getAllPublishedPosts();
//   const tags = posts.flatMap((post) => post.data.tags);

//   // Lấy unique tags
//   return [...new Set(tags)].sort();
// }
