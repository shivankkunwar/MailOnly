<template>
    <div class="email-app">
        <div class="container">
            <div v-if="loading" class="loading">
                <div class="spinner"></div>
                <p>Loading emails...</p>
            </div>

            <div v-else-if="error" class="error">
                <p> {{ error }}</p>
                <button @click="fetchEmails">Retry fetching</button>
            </div>

            <div v-else class="email-list">
                <h1>Inbox</h1>
                <div class="email-count">
                    {{ emails.length }} emails
                </div>

                <div
                v-for="email in emails"
                :key="email.id"
                class="email-item"
                @click="selectedEmail(email.id)"
                >
                    <div class="email-from">{{ email.from.name }}</div>
                    <div class="email-subject"> {{ email.subject }}</div>
                    <div class="email-description"> {{ email.short_description }}</div>
                    <div class="email-date">
                         {{ formatDate(email.date) }}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// No imports needed - Nuxt auto-imports everything!
const { emails, loading, error, fetchEmails } = useEmail();

onMounted(() => {
    fetchEmails();
})

const router = useRouter();
const selectedEmail = (id: string)=>{
    router.push(`/email/${id}`);
}

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

</script>


<style lang="scss" scoped>
.email-app {
  min-height: 100vh;
  padding: $spacing-lg;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.loading, .error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  color: $text-secondary;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid $bg-tertiary;
  border-top-color: $accent-primary;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error button {
  margin-top: $spacing-md;
  padding: $spacing-sm $spacing-lg;
  background: $accent-primary;
  color: white;
  border: none;
  border-radius: $radius-md;
  cursor: pointer;
  
  &:hover {
    background: $accent-hover;
  }
}

.email-list {
  h1 {
    font-size: 2rem;
    margin-bottom: $spacing-sm;
  }
  
  .email-count {
    color: $text-secondary;
    margin-bottom: $spacing-xl;
  }
}

.email-item {
  background: $bg-secondary;
  padding: $spacing-lg;
  margin-bottom: $spacing-md;
  border-radius: $radius-lg;
  border: 1px solid $border-color;
  cursor: pointer;
  transition: all $transition-normal;
  
  &:hover {
    border-color: $border-hover;
    transform: translateY(-2px);
  }
  
  .email-from {
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $spacing-xs;
  }
  
  .email-subject {
    font-size: 1.1rem;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  .email-description {
    color: $text-secondary;
    margin-bottom: $spacing-sm;
    line-height: 1.5;
  }
  
  .email-date {
    font-size: 0.875rem;
    color: $text-tertiary;
  }
}
</style>