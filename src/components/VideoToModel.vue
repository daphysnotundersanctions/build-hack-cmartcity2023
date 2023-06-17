<script setup>
import axios from "axios";
import { reactive, ref } from "vue";

const fileInput = ref(null);

const requestInfo = reactive({
    "fileName": null,
    "fileSize": null,
    "engineName": "video_to_3d",
    "engineVersion": "1",
});

function getFile(event) {
//   let formData = new FormData();
//   formData.append("image", event.target.files[0]);
  requestInfo.fileName = fileInput.value.files[0];
  console.log(fileInput.value.files[0]);
//   console.log(formData);
  requestInfo.fileSize = event.target.files[0].size;
  //   console.log(formData);
  //   console.log(event.target.files);
}

const REQUESTHEADERS = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
  Authorization: "Bearer " + import.meta.env.VITE_3D_KEY,
};

async function uploadVideo() {
  await axios.put(
    `https://api.3dpresso.ai/prod/api/v1/task`,
    requestInfo,
    {
      headers: REQUESTHEADERS,
    }
  );
}
</script>
<template>
  <input
    type="file"
    accept=".png,.jpg,.mp4,.jpeg"
    @change="getFile"
    ref="fileInput"
    name=""
    id=""
  />
  <!-- <input type="text" v-model="promptInput" /> -->
  <button @click="uploadVideo">upload</button>
</template>
<style lang=""></style>
