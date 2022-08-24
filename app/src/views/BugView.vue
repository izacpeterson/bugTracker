<template>
    <main class="p-5">
        <h1 class="text-4xl">{{ bug.title }}</h1>
        <div class="flex">
            <div class="w-1/3">
                <p>{{ bug.description }}</p>
            </div>
            <div class="w-1/3 px-10">
                <div>Created: {{ bug.timestamp }}</div>
                <div>Reporter: {{ bug.reporter }}</div>
                <div>Assignee: {{ bug.assigned }}</div>
                <div>Status: {{ bug.status }}</div>
                <div>ID: {{bug.uuid}}</div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            bug: {}
        }
    },
    created() {
        this.getBug();
    },
    methods: {
        async getBug() {
            let url = `/api/bug?uuid=${this.$route.params.uuid}`;
            let response = await fetch(url);
            let responseJson = await response.json();
            this.bug = responseJson
        }
    }
}
</script>