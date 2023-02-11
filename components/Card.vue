<script>
export default {
  props: {
    title: String,
    text: String,
    iconColor: String,
  }
}
</script>
<template>
     <article class="flex flex-col w-[95%] max-w-[24rem] p-2">
     <div class="flex items-center gap-3">
        <article :class="[{'text-lg w-8 justify-center items-center flex h-8 rounded-full text-center': true}, iconColor]"><slot></slot></article>
        <h3 class="max-w-xs">{{title}}</h3>
     </div>
        <p class="max-w-xs" v-html="text"></p>
    </article>
</template>