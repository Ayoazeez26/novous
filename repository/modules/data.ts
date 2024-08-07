import FetchFactory from "../factory";

import type { CreateAccountInput, FeedbackData, FeedbackInput, JobApplicationForm } from "~/types";

class DataModule extends FetchFactory {
  private RESOURCE = "";

  async getJobOpenings(): Promise {
    return await this.call("GET", `${this.RESOURCE}/jobs`);
  }

  async getSingleJob(id: string): Promise {
    return await this.call("GET", `${this.RESOURCE}/jobs/${id}`);
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

  async contactUs(credentials: FeedbackData): Promise {
    return await this.call("POST", `${this.RESOURCE}/feedbacks`, credentials);
  }
}

export default DataModule;
