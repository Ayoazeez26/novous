<!-- <template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="modal bg-white rounded-lg p-6 w-full max-w-lg md:mx-0 mx-5 md:h-[90%] md:overflow-y-scroll">
      <div class="flex items-center justify-end mb-7">
        <button @click="closeModal" class="text-secondary h-6 w-6 border rounded-full flex items-center justify-center">
          <Icon name="material-symbols-light:close-rounded" />
        </button>
      </div>
      <div class="justify-between items-center mb-10 space-y-2">
        <h2 class="text-2xl font-bold">Hi, Complete Your Profile Setup</h2>
        <p class="">Please fill in the form below to complete your profile setup.</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="fullName" v-model="form.fullName" placeholder="Placeholder" class="form-input" />
        </div>
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" v-model="form.username" placeholder="Username" class="form-input" />
        </div>
        <div class="mb-4">
          <label for="website" class="block text-sm font-medium text-gray-700">Portfolio/Personal Website</label>
          <input type="url" id="website" v-model="form.website" placeholder="Portfolio/Personal Website"
            class="form-input" />
        </div>
        <div class="mb-4">
          <label for="services" class="block text-sm font-medium text-gray-700">Services</label>
          <input type="text" id="services" v-model="form.services" placeholder="Services" class="form-input" />
        </div>
        <div class="mb-4">
          <label for="skills" class="block text-sm font-medium text-gray-700">Skills</label>
          <input type="text" id="skills" v-model="form.skills" placeholder="Skills" class="form-input" />
        </div>
        <div class="mb-4">
          <label for="education" class="block text-sm font-medium text-gray-700">Certification/Education
            (Optional)</label>
          <div class="form-input flex items-center justify-between">
            <p>Add Education/Certifications</p>
            <Icon name="material-symbols:add-circle-outline-rounded" />
          </div>
        </div>
        <div class="flex justify-between space-x-6 md:text-base text-sm">
          <button @click="closeModal" type="button"
            class="bg-secondary/10 w-full py-3 border border-secondary rounded text-secondary">Cancel</button>
          <button type="submit" class="bg-secondary w-full py-3 border border-secondary rounded text-white">Complete
            Profile Setup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:isVisible']);

const form = ref({
  fullName: '',
  username: '',
  website: '',
  services: '',
  skills: '',
  education: '',
});

const closeModal = () => {
  emit('update:isVisible', false);
};

const handleSubmit = () => {
  console.log(form.value);
};
</script>

<style scoped>
.modal::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.modal::-webkit-scrollbar {
  width: 5px;
  background-color: #F5F5F5;
}

.modal::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.44, rgba(234, 52, 35, 0.749)),
      color-stop(0.72, rgba(234, 52, 35, 0.468)),
      color-stop(0.86, rgba(234, 52, 35, 0.22)));
}
</style> -->


<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="modal bg-white rounded-lg p-6 w-full max-w-lg md:mx-0 mx-5 max-h-[90%] overflow-y-scroll">
      <div class="flex items-center justify-end mb-7">
        <button @click="closeModal" class="text-secondary h-6 w-6 border rounded-full flex items-center justify-center">
          <Icon name="material-symbols-light:close-rounded" />
        </button>
      </div>
      <div class="justify-between items-center mb-10 space-y-2">
        <h2 class="text-2xl font-bold">Hi, Complete Your Profile Setup</h2>
        <p class="">Please fill in the form below to complete your profile setup.</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="fullName" v-model="form.fullName" placeholder="Placeholder" class="form-input" />
        </div>
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" v-model="form.username" placeholder="Username" class="form-input" />
        </div>
        <div class="mb-4">
          <label for="website" class="block text-sm font-medium text-gray-700">Portfolio/Personal Website</label>
          <input type="url" id="website" v-model="form.website" placeholder="Portfolio/Personal Website"
            class="form-input" />
        </div>
        <div class="mb-4">
          <label for="services" class="block text-sm font-medium text-gray-700">Services</label>
          <input type="text" id="services" v-model="form.services" placeholder="Services" class="form-input" />
        </div>
        <div class="mb-4">
          <label for="skills" class="block text-sm font-medium text-gray-700">Skills</label>
          <input type="text" id="skills" v-model="form.skills" placeholder="Skills" class="form-input" />
        </div>
        <div class="mb-4">
          <label for="education" class="block text-sm font-medium text-gray-700">Certification/Education
            (Optional)</label>
          <div class="form-input flex items-center justify-between cursor-pointer" @click="toggleEducationForm">
            <p>Add Education/Certifications</p>
            <Icon name="material-symbols:add-circle-outline-rounded" />
          </div>
        </div>

        <div v-if="form.education.length" class="mb-4">
          <h3 class="text-lg font-medium text-gray-700">Education</h3>
          <ul>
            <li v-for="(edu, index) in form.education" :key="index" class="flex justify-between items-center mb-2">
              <p>{{ edu.degree }} {{ edu.fieldOfStudy }} from {{ edu.school }} ({{ edu.startYear }} - {{ edu.endYear
                }})</p>

              <button @click="removeEducation(index)" class="text-secondary">
                <Icon name="material-symbols-light:auto-delete-sharp" />
              </button>
            </li>
          </ul>
        </div>

        <div v-if="showEducationForm" class="mb-4">
          <div class="mb-4">
            <label for="school" class="block text-sm font-medium text-gray-700">School</label>
            <input type="text" id="school" v-model="educationForm.school" placeholder="School" class="form-input" />
          </div>
          <div class="mb-4">
            <label for="degree" class="block text-sm font-medium text-gray-700">Degree</label>
            <input type="text" id="degree" v-model="educationForm.degree" placeholder="B.Sc./B.Ed" class="form-input" />
          </div>
          <div class="mb-4">
            <label for="fieldOfStudy" class="block text-sm font-medium text-gray-700">Field of Study</label>
            <input type="text" id="fieldOfStudy" v-model="educationForm.fieldOfStudy" placeholder="Computer Science"
              class="form-input" />
          </div>
          <div class="mb-4">
            <label for="startYear" class="block text-sm font-medium text-gray-700">Start Year</label>
            <input type="text" id="startYear" v-model="educationForm.startYear" placeholder="Start Year"
              class="form-input" />
          </div>
          <div class="mb-4">
            <label for="endYear" class="block text-sm font-medium text-gray-700">End Year</label>
            <input type="text" id="endYear" v-model="educationForm.endYear" placeholder="End Year" class="form-input" />
          </div>
          <div class="flex items-center space-x-6 text-sm">
            <button type="button" @click="toggleEducationForm"
              class="bg-white w-full py-1 border border-secondary rounded text-secondary">Cancel</button>
            <button type="button" @click="addEducation"
              class="bg-secondary w-full py-1 border border-secondary rounded text-white">Add</button>
          </div>
        </div>


        <div class="flex justify-between space-x-6 md:text-base text-sm">
          <button @click="closeModal" type="button"
            class="bg-secondary/10 w-full py-3 border border-secondary rounded text-secondary">Cancel</button>
          <button type="submit" class="bg-secondary w-full py-3 border border-secondary rounded text-white">Complete
            Profile Setup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang='ts'>
// import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:isVisible']);

const form = ref({
  fullName: '',
  username: '',
  website: '',
  services: '',
  skills: '',
  education: [],
});

const educationForm = ref({
  school: '',
  degree: '',
  fieldOfStudy: '',
  startYear: '',
  endYear: '',
});

const showEducationForm = ref(false);

const closeModal = () => {
  emit('update:isVisible', false);
};

const toggleEducationForm = () => {
  showEducationForm.value = !showEducationForm.value;
};

const addEducation = () => {
  form.value.education.push({ ...educationForm.value });
  resetEducationForm();
  showEducationForm.value = false;
};

const removeEducation = (index: number) => {
  form.value.education.splice(index, 1);
};

const resetEducationForm = () => {
  educationForm.value = {
    school: '',
    degree: '',
    fieldOfStudy: '',
    startYear: '',
    endYear: '',
  };
};

const handleSubmit = () => {
  console.log(form.value);
};
</script>

<style scoped>
.modal::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.modal::-webkit-scrollbar {
  width: 5px;
  background-color: #F5F5F5;
}

.modal::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.44, rgba(234, 52, 35, 0.749)),
      color-stop(0.72, rgba(234, 52, 35, 0.468)),
      color-stop(0.86, rgba(234, 52, 35, 0.22)));
}
</style>
