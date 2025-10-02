import { readonly, ref } from "vue";

export const useEmail = ()=>{
    const EMAIL_API = "https://flipkart-email-mock.now.sh/";
    const emails = ref<any[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);



    const fetchEmails = async ()=>{
        loading.value = true;
        error.value = null;

        try{
            const response = await $fetch(`${EMAIL_API}`);
            emails.value  = (response as any).list || [];
        } catch(err){
            error.value = err;
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