import { HttpService } from "./httpService";

export const getPaymentData = async () => {
  return HttpService.get("/offer");
};

export const postSubscription = async (data: any) => {
  return HttpService.post("/subscription", data);
};
