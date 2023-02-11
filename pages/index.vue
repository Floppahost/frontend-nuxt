<script setup>
import LockPerson from '~icons/material-symbols/lock-person'
import Shield from '~icons/material-symbols/shield'
import Heart from '~icons/mdi/cards-heart'
</script>

<template>
    <section class="items-center flex justify-between container mx-auto px-24 h-[60vh]">
  <div>
    <h4><span class="uppercase bg-[#303030] py-1 px-2 rounded-full">floppa.host</span></h4>
    <h1 class="pt-2 max-w-md leading-none">File hosting for all caracals!</h1>
    <p class="py-2 max-w-md">A friendly, fast and private oriented file hosting plataform.</p>
    <button class="bg-blue-300 px-3 py-2 rounded">Sign up</button>
  </div>
    <img class="rounded-xl" src="/images/floppa.jpg">
    </section>
  

   <section class="py-6 bg-[#202020]">
   <!-- <article class="flex flex-col gap-4 justify-center items-center w-full">
    <img src="/images/paw.svg" class="w-8 relative right-6 rotate-[120deg]">
    <img src="/images/paw.svg" class="w-8 rotate-[140deg]">
    <img src="/images/paw.svg" class="w-8 relative right-2 rotate-[120deg]">
   </article> -->
    <h1 class="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 text-center">Our differential</h1>
    <div class="flex flex-col lg:flex-row w-full items-center justify-center">
        <Card title="Private" iconColor="bg-gradient-to-r from-blue-300 to-blue-700" text="<strong>Your files, your rules.</strong> We use military-grade encryption to ensure utmost privacy to our end users."><lock-person/></Card>
        <Card title="Reliable" iconColor="bg-gradient-to-r from-blue-300 to-blue-700" text="<strong>Almost never down.</strong> Our servers are hosted on reliable providers around the world."><shield/></Card>
        <Card title="Active" iconColor="bg-gradient-to-r from-blue-300 to-blue-700" text="<strong>We value our community.</strong> If someone has suggestions, bugs or questions, they can always count on us."><heart/></Card>
    </div>
   </section>
    <section class="flex justify-center items-center py-6">
        <h1 class="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">Something</h1>
    </section>
</template>