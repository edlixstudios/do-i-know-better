<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";
  import { tick } from 'svelte';
  const baseScreenText: string = "Do I know it better ?"; 
  let screenText:string = baseScreenText;
  let tried:boolean = false;

  let show:boolean = false;

  async function getAnswer(){
    if (tried) return;
    onInput();
    
    tried = true;
    const randomNumber = Math.random();

    if (randomNumber < .8){
      screenText = "No!! 🤬 Shut up and listen! 🤐"
    }else{
      screenText = "Yes you do! 🤓👌"
    }
  } 

  async function reset(){
    tried = false;
    screenText = baseScreenText;
    onInput();
  } 

  async function onInput () {
        show = false;
        await tick();
        show = true;
    }

  onMount(()=> show = true);

</script>


<div class="bg-slate-800 w-screen h-screen" > 
  <div class="w-full h-full flex flex-col gap-16 justify-center items-center " >
    {#if show}
      <h1 in:slide class="text-slate-100 h-1/5 font-bold text-3xl text-center leading-normal md:text-5xl xl:text-7xl" >{screenText}</h1>
    {/if}
    <div class="flex flex-col gap-2" >
      <button on:click={getAnswer} class="text-2xl font-bold text-slate-800 bg-slate-100 py-2 px-8 rounded-full transition-all md:text-4xl xl:font-sans xl:text-5xl xl:hover:scale-110 " >Let's find out</button>
      <button on:click={reset} class="text-slate-200 text-lg md:text-1xl xl:text-3xl" >Wanna try again?</button>
    </div>
  </div>
</div>