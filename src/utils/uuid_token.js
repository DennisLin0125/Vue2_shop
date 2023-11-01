import { v4 as uuidv4 } from "uuid";

// 要生成一個隨機字串且每次執行不能變化,永久儲存
export const getUUID = () => {
  // 先從本地存儲是否有UUID
  let uuid_token = localStorage.getItem("UUIDTOKEN");
  // 如果沒有就生成遊客臨時身分,並儲存
  if (!uuid_token) {
    uuid_token = uuidv4();
    localStorage.setItem("UUIDTOKEN",uuid_token);
  }
  return uuid_token;
};
