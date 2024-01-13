<template>
    <div class="searchbar">
        <input class="searchbar-input" type="text" placeholder="I'm searching for">
        <v-btn class="searchbar-btn">
            <v-icon icon="mdi-magnify" color="white" size="x-large"></v-icon>
        </v-btn>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.searchbar {
    width: 500px;
    height: 50px;
    max-width: 500px;
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.searchbar-input {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 10px;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 1px solid rgb(218, 218, 218);
    transition: all 0.5s
}

.searchbar-input:focus{
    border-color: #6262a6;
}

.searchbar-btn {
    width: auto;
    height: 100%;
    background: #6262a6;
    border-radius: 3px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.searchbar-icon {
    padding: 0px;
}

@media (max-width: 768px) {
    .searchbar {
        display: none;
    }
}
</style>