<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greting = '';

  if (currentHour < 12) {
    greting = 'Buenos días';
  } else if (currentHour < 18) {
    greting = 'Buenas tardes';
  } else {
    greting = 'Buenas noches';
  }
</script>

<h1 class="text-3xl font-bold">{greting}</h1>
