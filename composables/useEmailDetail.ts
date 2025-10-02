import { readonly, ref } from "vue";

export const useEmailDetail = ()=>{
    const EMAIL_API = "https://flipkart-email-mock.now.sh/";
    const email = ref<any | null>(null);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);


    const fetchEmail = async (id: string)=>{
        loading.value =true;
        error.value = null;

        try{
            const response = await $fetch(`${EMAIL_API}?id=${id}`)
            email.value = response;
        }catch(err){
            error.value = err;
        }finally{
            loading.value =false;
        }
    }

    return {
        email :readonly(email),
        loading: readonly(loading),
        error: readonly(error),
        fetchEmail
    }
}