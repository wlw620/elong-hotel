

<template lang="html">

<div class="pages">
    <div class="page">
        <welcom></welcom>
        <index></index>
    </div>
</div>

</template>

<script>

import Welcom from '../components/Welcom.vue';
import Index from '../components/Index.vue';

export default {
    components: {
        welcom: Welcom,
        index: Index
    }
}

</script>
