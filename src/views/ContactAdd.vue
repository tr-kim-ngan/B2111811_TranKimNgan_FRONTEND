<template>
    <div class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm @submit:contact="addContact" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async addContact(contact) {
            try {
                await ContactService.create(contact);
                this.message = "Liên hệ được thêm thành công.";
                this.$router.push({ name: "contactbook" });
            } catch (error) {
                console.log(error);
                this.message = "Đã xảy ra lỗi khi thêm liên hệ.";
            }
        },
    },
};
</script>

<style scoped>
.page {
    max-width: 400px;
    margin: auto;
}
</style>
