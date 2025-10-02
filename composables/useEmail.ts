// No imports needed - Nuxt auto-imports ref, readonly, $fetch!
export const useEmail = () => {
    const EMAIL_API = "https://flipkart-email-mock.now.sh/";
    const emails = ref<any[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);



    const fetchEmails = async ()=>{
        loading.value = true;
        error.value = null;

        try {
            const response = await $fetch(`${EMAIL_API}`);
            emails.value = (response as any).list || [];
        } catch (err) {
            error.value = 'Failed to fetch emails';
            console.error(err);
        }
        finally{
            loading.value= false;
        }
    }

    return {
        emails: readonly(emails),
        loading: readonly(loading),
        error: readonly(error),
        fetchEmails
    }
}