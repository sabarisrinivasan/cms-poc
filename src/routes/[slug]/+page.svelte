<script lang="ts">
 let {data}=$props()
 $inspect(data.article[0].Title)
</script>

<section class=" mx-auto max-w-2xl  h-dvh flex flex-col gap-6 p-10">
 <h1 class="text-2xl">
   {data.article[0].Title}
 </h1>
 <p>{data.article[0].description}</p>
 <img src={`http://localhost:1337${data.article[0].image.url}`} alt="">
</section>