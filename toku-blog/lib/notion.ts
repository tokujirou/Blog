import { APIResponseError, Client } from "@notionhq/client";
const notion = process.env.NOTION_TOKEN
  ? new Client({
      auth: process.env.NOTION_TOKEN,
    })
  : null;

export const getDataBase = async (database_id: string) => {
  try {
    const res = await notion?.databases.query({
      database_id,
    });
    return res;
  } catch (error: unknown) {
    if (APIResponseError.isAPIResponseError(error)) {
      console.error(error.code);
    }
    return null;
  }
};

export const getPage = async (page_id: string) => {
  const response = await notion?.pages.retrieve({ page_id });
  return response;
};

export const getBlock = async (blockId: string) => {
  const blocks = [];
  let cursor;
  while (true) {
    //@ts-expect-error
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};
