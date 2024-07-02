<script setup lang="ts">
import { useDataStore } from "~/stores/data";
import { useDialogStore } from "~/stores/dialog";
import type { CreateAccountInput } from "~/types";

// import { ref, defineProps, defineEmits } from 'vue';
const dialogStore = useDialogStore();
const data = useDataStore();
const clickedOutside = () => {
  dialogStore.showAccountModal = false;
};
const form = ref<CreateAccountInput>({
  LastName: "",
  OtherNames: "",
  PhoneNo: "",
  Gender: "",
  PlaceOfBirth: "",
  DateOfBirth: "",
  BVN: "",
  Address: "",
  Email: "",
});

const createAccount = async () => {
  data.createAccount(form.value);
  console.log(form.value);
};
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
  >
    <div
      v-click-outside="clickedOutside"
      class="modal bg-white rounded-lg p-6 w-full max-w-lg md:mx-0 mx-5 max-h-[90%] overflow-y-scroll"
    >
      <div class="flex items-center justify-end mb-7">
        <button
          @click="clickedOutside"
          class="text-secondary h-6 w-6 border rounded-full flex items-center justify-center"
        >
          <Icon name="material-symbols-light:close-rounded" />
        </button>
      </div>
      <div class="justify-between items-center mb-10 space-y-2">
        <h2 class="text-2xl font-bold">Hi, Complete Your Profile Setup</h2>
        <p class="">
          Please fill in the form below to complete your profile setup.
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="LastName" class="block text-sm font-medium text-gray-700"
            >Last Name</label
          >
          <input
            type="text"
            id="LastName"
            v-model="form.LastName"
            placeholder="Placeholder"
            class="form-input"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="OtherNames"
            class="block text-sm font-medium text-gray-700"
            >Other Names</label
          >
          <input
            type="text"
            id="OtherNames"
            v-model="form.OtherNames"
            placeholder="Other Names"
            class="form-input"
            required
          />
        </div>
        <div class="mb-4">
          <label for="website" class="block text-sm font-medium text-gray-700"
            >Phone Number</label
          >
          <input
            type="text"
            id="website"
            v-model="form.PhoneNo"
            placeholder="+234"
            class="form-input"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-sm font-medium text-gray-700"
            for="marital-status"
          >
            Gender
          </label>
          <select
            v-model="form.Gender"
            class="form-input"
            id="marital-status"
            required
          >
            <option :value="0">Male</option>
            <option :value="1">Female</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="services" class="block text-sm font-medium text-gray-700"
            >Place of Birth</label
          >
          <input
            type="text"
            id="services"
            v-model="form.PlaceOfBirth"
            placeholder="Place Of Birth"
            class="form-input"
            required
          />
        </div>
        <div class="mb-4">
          <label for="dob" class="block text-sm font-medium text-gray-700"
            >Date Of Birth</label
          >
          <input
            v-model="form.DateOfBirth"
            type="text"
            name="dob"
            id="dob"
            placeholder="Pick a date"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            class="form-input"
            required
          />
        </div>
        <div class="mb-4">
          <label for="bvn" class="block text-sm font-medium text-gray-700"
            >BVN</label
          >
          <input
            type="text"
            id="bvn"
            v-model="form.BVN"
            placeholder="BVN"
            class="form-input"
            required
          />
        </div>
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address</label
          >
          <input
            type="text"
            id="address"
            v-model="form.Address"
            placeholder="Address"
            class="form-input"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.Email"
            placeholder="Email"
            class="form-input"
            required
          />
        </div>
        <!-- <div class="mb-4">
          <label for="education" class="block text-sm font-medium text-gray-700"
            >Certification/Education (Optional)</label
          >
          <div
            class="form-input flex items-center justify-between cursor-pointer"
            @click="toggleEducationForm"
          >
            <p>Add Education/Certifications</p>
            <Icon name="material-symbols:add-circle-outline-rounded" />
          </div>
        </div> -->

        <!-- <div v-if="form.education.length" class="mb-4">
          <h3 class="text-lg font-medium text-gray-700">Education</h3>
          <ul>
            <li
              v-for="(edu, index) in form.education"
              :key="index"
              class="flex justify-between items-center mb-2"
            >
              <p>
                {{ edu.degree }} {{ edu.fieldOfStudy }} from
                {{ edu.school }} ({{ edu.startYear }} - {{ edu.endYear }})
              </p>

              <button @click="removeEducation(index)" class="text-secondary">
                <Icon name="material-symbols-light:auto-delete-sharp" />
              </button>
            </li>
          </ul>
        </div> -->

        <!-- <div v-if="showEducationForm" class="mb-4">
          <div class="mb-4">
            <label for="school" class="block text-sm font-medium text-gray-700"
              >School</label
            >
            <input
              type="text"
              id="school"
              v-model="educationForm.school"
              placeholder="School"
              class="form-input"
            />
          </div>
          <div class="mb-4">
            <label for="degree" class="block text-sm font-medium text-gray-700"
              >Degree</label
            >
            <input
              type="text"
              id="degree"
              v-model="educationForm.degree"
              placeholder="B.Sc./B.Ed"
              class="form-input"
            />
          </div>
          <div class="mb-4">
            <label
              for="fieldOfStudy"
              class="block text-sm font-medium text-gray-700"
              >Field of Study</label
            >
            <input
              type="text"
              id="fieldOfStudy"
              v-model="educationForm.fieldOfStudy"
              placeholder="Computer Science"
              class="form-input"
            />
          </div>
          <div class="mb-4">
            <label
              for="startYear"
              class="block text-sm font-medium text-gray-700"
              >Start Year</label
            >
            <input
              type="text"
              id="startYear"
              v-model="educationForm.startYear"
              placeholder="Start Year"
              class="form-input"
            />
          </div>
          <div class="mb-4">
            <label for="endYear" class="block text-sm font-medium text-gray-700"
              >End Year</label
            >
            <input
              type="text"
              id="endYear"
              v-model="educationForm.endYear"
              placeholder="End Year"
              class="form-input"
            />
          </div>
          <div class="flex items-center space-x-6 text-sm">
            <button
              type="button"
              @click="toggleEducationForm"
              class="bg-white w-full py-1 border border-secondary rounded text-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              @click="addEducation"
              class="bg-secondary w-full py-1 border border-secondary rounded text-white"
            >
              Add
            </button>
          </div>
        </div> -->

        <div class="flex justify-between space-x-6 md:text-base text-sm">
          <button
            @click="clickedOutside"
            type="button"
            class="bg-secondary/10 w-full py-3 border border-secondary rounded text-secondary"
          >
            Cancel
          </button>
          <button
            @click="createAccount"
            type="button"
            class="bg-secondary w-full py-3 border border-secondary rounded text-white"
          >
            Complete Profile Setup
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.modal::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.modal::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgba(234, 52, 35, 0.749)),
    color-stop(0.72, rgba(234, 52, 35, 0.468)),
    color-stop(0.86, rgba(234, 52, 35, 0.22))
  );
}
</style>
