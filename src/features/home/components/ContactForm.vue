<script setup lang="ts">
import { ref } from "vue";
import { sendTelegramMessage } from "../../../services/telegramService";

const name = ref("");
const email = ref("");
const message = ref("");
const status = ref<"idle" | "sending" | "sent" | "error">("idle");
const errorMsg = ref("");

const handleSubmit = async () => {
  if (!name.value.trim() || !message.value.trim()) {
    errorMsg.value = "Please fill in your name and message.";
    status.value = "error";
    return;
  }

  status.value = "sending";
  errorMsg.value = "";

  const result = await sendTelegramMessage({
    type: "contact",
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
  });

  if (result.success) {
    status.value = "sent";
    name.value = "";
    email.value = "";
    message.value = "";
    setTimeout(() => {
      status.value = "idle";
    }, 5000);
  } else {
    errorMsg.value = result.error || "Something went wrong.";
    status.value = "error";
  }
};
</script>

<template>
  <div class="contact-form-wrapper">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-group">
          <label for="cf-name" class="form-label">Name *</label>
          <input
            id="cf-name"
            v-model="name"
            type="text"
            class="form-input"
            placeholder="Your name"
            autocomplete="name"
            required
          />
        </div>
        <div class="form-group">
          <label for="cf-email" class="form-label">Email</label>
          <input
            id="cf-email"
            v-model="email"
            type="email"
            class="form-input"
            placeholder="your@email.com"
            autocomplete="email"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="cf-message" class="form-label">Message *</label>
        <textarea
          id="cf-message"
          v-model="message"
          class="form-textarea"
          placeholder="Hey, I'd love to work with you on..."
          rows="4"
          required
        ></textarea>
      </div>

      <p v-if="status === 'error'" class="form-error">{{ errorMsg }}</p>

      <button
        type="submit"
        class="form-submit"
        :class="{ 'form-submit--sent': status === 'sent' }"
        :disabled="status === 'sending'"
        data-cursor="circle-white"
      >
        <span v-if="status === 'sending'" class="submit-spinner"></span>
        <span v-else-if="status === 'sent'" class="sent-label">Sent <span class="sent-arrow">→</span></span>
        <span v-else>Send Message</span>
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.contact-form-wrapper {
  width: 100%;
  max-width: 540px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.form-row {
  display: flex;
  gap: 1rem;

  @media (max-width: 479px) {
    flex-direction: column;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
}

.form-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-family: inherit;
  color: #000;
  background: rgba(255, 255, 255, 0.45);
  border: 1.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  outline: none;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }

  &:focus {
    border-color: #000;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.08);
  }
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
  max-height: 220px;
}

.form-error {
  font-size: 0.85rem;
  color: #d63031;
  margin: 0;
}

.form-submit {
  align-self: flex-start;
  padding: 0.7rem 2rem;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  color: #fff;
  background: var(--color-dark-blue-500, #052e87);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.25s ease,
    opacity 0.2s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(5, 46, 135, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  &--sent {
    background: #27ae60;
    pointer-events: none;
  }
}

.sent-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.sent-arrow {
  display: inline-block;
  animation: slideRight 0.4s ease;
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.submit-spinner {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
