<template>
    <tr>
        <td>{{ title }}</td>
        <td>${{ price }}</td>
        <td>{{ color }}</td>
    </tr>
</template>

<script lang="ts">

export default {
    name: 'Product',
    props: {
        title: String,
        price: Number,
        color: String
    }
}
</script>

<style>
    td {
        padding: 5px;
    }
</style>

