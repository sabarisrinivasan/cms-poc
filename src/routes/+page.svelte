<script lang="ts">
 
 let {data} =$props()
 
 $inspect(data)
 
</script>

<section class=" mx-auto max-w-2xl  h-dvh flex flex-col gap-6 p-10">
  <h1 class="text-4xl"> blogs</h1>

   <ul class="flex flex-col gap-10">
       {#each data.articles as items}
         <a href={items.slug}><li>{items.Title}</li></a>
  {/each}
   </ul>
</section>
