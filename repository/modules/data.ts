import FetchFactory from "../factory";

import type { CreateAccountInput, FeedbackInput, JobApplicationForm } from "~/types";

class DataModule extends FetchFactory {
  private RESOURCE = "";

  async getJobOpenings(): Promise {
    return await this.call("GET", `${this.RESOURCE}/jobs`);
  }

  async jobApplication(credentials: JobApplicationForm): Promise {
    return await this.call(
      "POST",
      `${this.RESOURCE}/job-applications`,
      credentials,
      { "Content-Type": "multipart/form-data" }
    );
  }

  async createAccount(credentials: CreateAccountInput): Promise {
    return await this.call("POST", `${this.RESOURCE}/accounts`, credentials);
  }

  async contactUs(credentials: FeedbackInput): Promise {
    return await this.call("POST", `${this.RESOURCE}/feedbacks`, credentials);
  }
}

export default DataModule;
