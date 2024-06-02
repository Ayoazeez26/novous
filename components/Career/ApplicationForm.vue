<script lang="ts" setup>

const form = ref({
  fullName: "",
  phoneNo: "",
  gender: "",
  homeAddress: "",
  stateOfResidence: "",
  emailAddress: "",
  altPhoneNo: "",
  maritalStatus: "",
  nationality: "",
  lga: "",
  highestLevelOfEducation: "",
  fieldOfStudy: "",
  yearOfGraduation: "",
  nameOfInstitution: "",
  degreeCertificate: "",
  currentPreviousEmployer: "",
  employmentDurationStart: "",
  currentlyWorkingHere: false,
  responsibilitiesAndAchievements: "",
  jobTitle: "",
  employmentDurationEnd: "",
  relevantSkills: "",
  professionalCertifications: "",
  refereeOne: {
    name: "",
    position: "",
    phone: "",
    email: "",
  },
  refereeTwo: {
    name: "",
    position: "",
    phone: "",
    email: "",
  },
  refereeThree: {
    name: "",
    position: "",
    phone: "",
    email: "",
  },
  coverLetter: null,
  resumeCV: null,
  professionalCertification: null,
  otherRelevantDocuments: null,
});

const handleFileChange = (event, field) => {
  form.value[field] = event.target.files[0];
};

const handleFileDrop = (event, field) => {
  form.value[field] = event.dataTransfer.files[0];
};

const onSubmit = () => {
  console.log(form.value);
};
</script>

<template>
  <div class="md:py-20 py-10 w-full">
    <div class=" mx-auto md:px-0 px-5 max-w-[1240px]">
      <div class="md:text-left text-center space-y-6 mb-10">
        <h2 class="text-3xl font-bold">About the Bank</h2>
        <p class="text-gray-600">
          At Novus MFB, we are committed to providing innovative financial solutions
          tailored to meet the diverse needs of our customers. With a focus on
          empowering individuals and businesses, we strive to foster financial
          inclusion and drive economic growth within our communities.
        </p>
      </div>
      <form @submit.prevent="onSubmit" class="space-y-10">
        <div>
          <h2 class="text-2xl font-bold mb-4">Personal Information</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="">
              <label class="form-label" for="full-name">
                Full Name
              </label>
              <input v-model="form.fullName" class="form-input" id="full-name" type="text" placeholder="Full Name" />
            </div>
            <div class="">
              <label class="form-label" for="email-address">
                Email Address
              </label>
              <input v-model="form.emailAddress" class="form-input" id="email-address" type="email"
                placeholder="Email Address" />
            </div>
            <div class="">
              <label class="form-label" for="phone-no">
                Phone No
              </label>
              <input v-model="form.phoneNo" class="form-input" id="phone-no" type="tel" placeholder="Phone No" />
            </div>
            <div class="">
              <label class="form-label" for="alt-phone-no">
                Alt Phone No
              </label>
              <input v-model="form.altPhoneNo" class="form-input" id="alt-phone-no" type="tel"
                placeholder="Alt Phone No" />
            </div>
            <div class="">
              <label class="form-label" for="gender">
                Gender
              </label>
              <select v-model="form.gender" class="form-input" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="marital-status">
                Marital Status
              </label>
              <select v-model="form.maritalStatus" class="form-input" id="marital-status">
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="home-address">
                Home Address
              </label>
              <input v-model="form.homeAddress" class="form-input" id="home-address" type="text"
                placeholder="Home Address" />
            </div>
            <div class="">
              <label class="form-label" for="nationality">
                Nationality
              </label>
              <select v-model="form.nationality" class="form-input" id="nationality">
                <option value="nigerian">Nigerian</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="state-of-residence">
                State of Residence
              </label>
              <select v-model="form.stateOfResidence" class="form-input" id="state-of-residence">
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="kano">Kano</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="lga">
                LGA
              </label>
              <select v-model="form.lga" class="form-input" id="lga">
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="kano">Kano</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Educational Background</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="">
              <label class="form-label" for="highest-level-of-education">
                Highest level of Education attained
              </label>
              <select v-model="form.highestLevelOfEducation" class="form-input" id="highest-level-of-education">
                <option value="">Highest level of Education attained</option>
                <option value="secondary">Secondary</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelors</option>
                <option value="masters">Masters</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="name-of-institution">
                Name of Institution
              </label>
              <input v-model="form.nameOfInstitution" class="form-input" id="name-of-institution" type="text"
                placeholder="Name of Institution" />
            </div>
            <div class="">
              <label class="form-label" for="field-of-study">
                Field of Study/Major
              </label>
              <select v-model="form.fieldOfStudy" class="form-input" id="field-of-study">
                <option value="">Field of Study/Major</option>
                <option value="secondary">Secondary</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelors</option>
                <option value="masters">Masters</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            <div class="">
              <label class="form-label" for="degree-certificate">
                Degree/Certificate Obtained
              </label>
              <input v-model="form.degreeCertificate" class="form-input" id="degree-certificate" type="text"
                placeholder="Degree/Certificate Obtained" />
            </div>
            <div class="">
              <label class="form-label" for="year-of-graduation">
                Year of Graduation
              </label>
              <select v-model="form.yearOfGraduation" class="form-input" id="year-of-graduation">
                <option value="">Year of Graduation</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Work Experience</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="">
              <label class="form-label" for="current-previous-employer">
                Current/Previous Employer
              </label>
              <input v-model="form.currentPreviousEmployer" class="form-input" id="current-previous-employer"
                type="text" placeholder="Current/Previous Employer" />
            </div>
            <div class="">
              <label class="form-label" for="job-title">
                Job Title
              </label>
              <input v-model="form.jobTitle" class="form-input" id="job-title" type="text" placeholder="Job Title" />
            </div>
            <div class="">
              <label class="form-label" for="employment-duration-start">
                Employment duration (Start Date)
              </label>
              <input v-model="form.employmentDurationStart" class="form-input" id="employment-duration-start"
                type="date" placeholder="Employment duration (Start Date)" />
            </div>
            <div class="">
              <label class="form-label" for="employment-duration-end">
                Employment duration (End Date)
              </label>
              <input v-model="form.employmentDurationEnd" class="form-input" id="employment-duration-end" type="date"
                placeholder="Employment duration (End Date)" />
            </div>
            <div class="flex items-center space-x-2">
              <input v-model="form.currentlyWorkingHere" class="" id="currently-working-here" type="checkbox" />
              <label class="" for="currently-working-here">
                Currently working here
              </label>
            </div>
            <div class="md:col-span-2">
              <label class="form-label" for="responsibilities-and-achievements">
                Responsibilities and Achievements
              </label>
              <textarea v-model="form.responsibilitiesAndAchievements" rows="5" class="form-input"
                id="responsibilities-and-achievements" placeholder="Responsibilities and Achievements"></textarea>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Skills and Qualifications</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="">
              <label class="form-label" for="relevant-skills">
                Relevant Skills (e.g., Technical, Soft Skills)
              </label>
              <input v-model="form.relevantSkills" class="form-input" id="relevant-skills" type="text"
                placeholder="Relevant Skills (e.g., Technical, Soft Skills)" />
            </div>
            <div class="">
              <label class="form-label" for="professional-certifications">
                Professional Certifications
              </label>
              <input v-model="form.professionalCertifications" class="form-input" id="professional-certifications"
                type="text" placeholder="Professional Certifications" />
            </div>
          </div>
        </div>
        <h2 class="text-2xl font-bold mb-4">References</h2>
        <p class="text-gray-600 mb-4">
          Please note that these referees stand in as your guarantors and may be
          contacted when necessary.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 bg-grey-20 rounded-lg space-y-6">
            <h3 class="text-xl font-bold mb-2">Referee One (1)</h3>
            <div class="space-y-5">
              <input v-model="form.refereeOne.name" class="form-input" id="referee-one-name" type="text"
                placeholder="Name of Referee" />
              <input v-model="form.refereeOne.position" class="form-input" id="referee-one-position" type="text"
                placeholder="Position/Relationship to Applicant" />
              <input v-model="form.refereeOne.phone" class="form-input" id="referee-one-phone" type="tel"
                placeholder="Phone No" />
              <input v-model="form.refereeOne.email" class="form-input" id="referee-one-email" type="email"
                placeholder="Email Address" />
            </div>
          </div>
          <div class="p-5 bg-grey-20 rounded-lg space-y-6">
            <h3 class="text-xl font-bold mb-2">Referee Two (2)</h3>
            <div class="space-y-5">
              <input v-model="form.refereeTwo.name" class="form-input" id="referee-one-name" type="text"
                placeholder="Name of Referee" />
              <input v-model="form.refereeTwo.position" class="form-input" id="referee-one-position" type="text"
                placeholder="Position/Relationship to Applicant" />
              <input v-model="form.refereeTwo.phone" class="form-input" id="referee-one-phone" type="tel"
                placeholder="Phone No" />
              <input v-model="form.refereeTwo.email" class="form-input" id="referee-one-email" type="email"
                placeholder="Email Address" />
            </div>
          </div>
          <div class="p-5 bg-grey-20 rounded-lg space-y-6">
            <h3 class="text-xl font-bold mb-2">Referee Three (3)</h3>
            <div class="space-y-5">
              <input v-model="form.refereeThree.name" class="form-input" id="referee-one-name" type="text"
                placeholder="Name of Referee" />
              <input v-model="form.refereeThree.position" class="form-input" id="referee-one-position" type="text"
                placeholder="Position/Relationship to Applicant" />
              <input v-model="form.refereeThree.phone" class="form-input" id="referee-one-phone" type="tel"
                placeholder="Phone No" />
              <input v-model="form.refereeThree.email" class="form-input" id="referee-one-email" type="email"
                placeholder="Email Address" />
            </div>
          </div>
          <div
            class="border-2 border-dashed flex items-center justify-center md:py-0 py-5 cursor-pointer hover:bg-[#F7F8F9] transition-all duration-300 ease-in-out">
            <div class="flex md:flex-col flex-row items-center md:space-x-0 space-x-3 md:space-y-3">
              <span class="md:text-3xl md:border md:h-10 md:w-10 md:rounded-full md:flex items-center justify-center">
                <Icon name="material-symbols:add" />
              </span>
              <span>
                Add Referee
              </span>
            </div>
          </div>
        </div>
        <h2 class="text-2xl font-bold mb-4">Attachments</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="">
            <label class="form-label block text-sm font-medium text-gray-700" for="cover-letter">Cover Letter</label>
            <div @dragover.prevent @dragenter.prevent @drop.prevent="handleFileDrop($event, 'coverLetter')"
              class="mt-1 flex justify-center px-6 border border-gray-300 border-dashed rounded-md cursor-pointer py-20">
              <div class="space-y-1 text-center">
                <div class="flex text-sm text-gray-600">
                  <label for="cover-letter-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Drag and drop or <u>Upload</u></span>
                    <input id="cover-letter-upload" name="cover-letter-upload" type="file" class="sr-only"
                      @change="handleFileChange($event, 'coverLetter')" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <label class="form-label block text-sm font-medium text-gray-700" for="resume-cv">Resume/CV</label>
            <div @dragover.prevent @dragenter.prevent @drop.prevent="handleFileDrop($event, 'resumeCV')"
              class="mt-1 flex justify-center px-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer py-20">
              <div class="space-y-1 text-center">
                <div class="flex text-sm text-gray-600">
                  <label for="resume-cv-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Drag and drop or <u>Upload</u></span>
                    <input id="resume-cv-upload" name="resume-cv-upload" type="file" class="sr-only"
                      @change="handleFileChange($event, 'resumeCV')" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <label class="form-label block text-sm font-medium text-gray-700"
              for="professional-certification">Professional Certification (if applicable)</label>
            <div @dragover.prevent @dragenter.prevent
              @drop.prevent="handleFileDrop($event, 'professionalCertification')"
              class="mt-1 flex justify-center px-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer py-20">
              <div class="space-y-1 text-center">
                <div class="flex text-sm text-gray-600">
                  <label for="professional-certification-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Drag and drop or <u>Upload</u></span>
                    <input id="professional-certification-upload" name="professional-certification-upload" type="file"
                      class="sr-only" @change="handleFileChange($event, 'professionalCertification')" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <label class="form-label block text-sm font-medium text-gray-700" for="other-relevant-documents">Any Other
              Relevant Documents</label>
            <div @dragover.prevent @dragenter.prevent @drop.prevent="handleFileDrop($event, 'otherRelevantDocuments')"
              class="mt-1 flex justify-center px-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer py-20">
              <div class="space-y-1 text-center">
                <div class="flex text-sm text-gray-600">
                  <label for="other-relevant-documents-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Drag and drop or <u>Upload</u></span>
                    <input id="other-relevant-documents-upload" name="other-relevant-documents-upload" type="file"
                      class="sr-only" @change="handleFileChange($event, 'otherRelevantDocuments')" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="flex md:flex-row flex-col gap-10 md:items-center justify-between bg-[#ECF4F9] md:px-16 px-5 py-6 mt-6">
      <div class='flex items-center space-x-2'>
        <img src="/img/applicationFormImg.jpeg"
          class="md:w-20 md:h-20 border-4 border-white md:rounded-lg w-14 h-14 rounded-full" />
        <div>
          <h3 class="font-bold">Application Form</h3>
          <div class="flex items-center md:space-x-3 space-x-1 text-sm text-gray-600">
            <p class="">Makurdi Benue State</p>
            <span class="w-2 h-2 rounded-full bg-gray-200"></span>
            <p class="">Grade Band: <span class="text-black">MT</span></p>
            <span class="w-2 h-2 rounded-full bg-gray-200"></span>
            <p class="">Age Limit: <span class="text-black">Thirty (30)</span></p>
          </div>

        </div>
      </div>

      <button
        class="bg-secondary text-white rounded md:py-6 py-4 px-12 hover:bg-white hover:text-secondary transition-all duration-300 ease-in-out whitespace-nowrap md:w-auto w-full">
        Apply Now</button>

    </div>
  </div>
</template>
