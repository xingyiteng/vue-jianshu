<template>
    <quill-editor 
      v-model="content" 
      ref="myQuillEditor" 
      :options="editorOption" 
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
</template>

<script>
export default {
    name: 'bianjiqi',
}
</script>

<style scoped>

</style>
