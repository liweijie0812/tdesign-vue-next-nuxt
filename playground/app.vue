<template>
  <div>
    Nuxt module playground!
  </div>
  <div>
    tdesign version: {{ tdesign.version }}
  </div>
  <t-button @click="handleShow">按钮1</t-button>
  <t-form>
    <t-form-item label="用户名">
      <t-input />
    </t-form-item>
  </t-form>
</template>

<script setup>
import tdesign from 'tdesign-vue-next'
const handleShow = () => {
  MessagePlugin.success('11')
}
</script>
