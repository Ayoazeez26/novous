export interface HandoutInput {
  product: string;
  email: string;
  preference: string;
}

export interface FileUploadResponse {
  ACL: string;
  Bucket: string;
  FileType: string;
  Key: string;
  Location: string;
  Path: string;
  Size: number;
  createdAt: string;
  createdBy: string;
  id: string;
  updatedAt: string;
}

export interface ArticleCreateInput {
  cover: string;
  headLineCover: string;
  thumbNail: string;
  name: string;
  body: string;
}

interface RefereeInfo {
  name: string;
  position: string;
  phone: string;
  email: string;
}

interface JobApplicationForm {
  fullName: string;
  phoneNo: string;
  gender: string;
  homeAddress: string;
  stateOfResidence: string;
  emailAddress: string;
  altPhoneNo: string;
  maritalStatus: string;
  nationality: string;
  lga: string;
  highestLevelOfEducation: string;
  fieldOfStudy: string;
  yearOfGraduation: string;
  nameOfInstitution: string;
  degreeCertificate: string;
  currentPreviousEmployer: string;
  employmentDurationStart: string;
  currentlyWorkingHere: boolean;
  responsibilitiesAndAchievements: string;
  jobTitle: string;
  employmentDurationEnd: string;
  relevantSkills: string;
  professionalCertifications: string;
  refereeOne: RefereeInfo;
  refereeTwo: RefereeInfo;
  refereeThree: RefereeInfo;
  coverLetter: File | null;
  resumeCV: File | null;
  professionalCertification: File | null;
  otherRelevantDocuments: File | null;
}

interface CreateAccountInput {
  LastName: string;
  OtherNames: string;
  PhoneNo: string;
  Gender: string;
  PlaceOfBirth: string;
  DateOfBirth: string;
  BVN: string;
  Address: string;
  Email: string;
}

interface FeedbackData {
  data: FeedbackInput
}

interface FeedbackInput {
  firstName: string;
  lastName: string;
  content: string;
  email: string;
  subject: string;
}