<script setup lang="ts">
import { ref } from "vue";
import { useModalStore } from "../../composables/useModalStore";
import { sendTelegramMessage } from "../../services/telegramService";

const { isGetInTouchOpen, closeGetInTouch } = useModalStore();

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
      closeGetInTouch();
    }, 2500);
  } else {
    errorMsg.value = result.error || "Failed to send message. Please try again.";
    status.value = "error";
  }
};
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="isGetInTouchOpen" class="modal-backdrop" @click.self="closeGetInTouch">
      <div class="modal-card">
        <button class="modal-close" @click="closeGetInTouch" aria-label="Close modal">✕</button>

        <div class="modal-header">
          <h2 class="modal-title">Get In Touch</h2>
          <p class="modal-subtitle">Send a quick message straight to me!</p>
        </div>

        <div v-if="status === 'sent'" class="modal-success">
          <div class="success-icon">✨</div>
          <h3>Message Sent!</h3>
          <p>Thanks for reaching out! I'll get back to you as soon as possible.</p>
        </div>

        <form v-else class="modal-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="form-label">Your Name <span class="required">*</span></label>
            <input
              v-model="name"
              type="text"
              class="form-input"
              placeholder="e.g. Alex Smith"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Email or Telegram / Contact</label>
            <input
              v-model="email"
              type="text"
              class="form-input"
              placeholder="alex@example.com or @alex_tg"
            />
          </div>

          <div class="form-group">
            <label class="form-label">Your Message <span class="required">*</span></label>
            <textarea
              v-model="message"
              class="form-textarea"
              placeholder="Hi Gaurav, I wanted to talk about..."
              rows="4"
              required
            ></textarea>
          </div>

          <p v-if="status === 'error'" class="form-error">{{ errorMsg }}</p>

          <button
            type="submit"
            class="submit-btn"
            :disabled="status === 'sending'"
          >
            <span v-if="status === 'sending'" class="spinner"></span>
            <span v-else>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;

  .modal-card {
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .modal-card {
    transform: scale(0.9) translateY(20px);
    opacity: 0;
  }
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(18, 18, 24, 0.65);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
}

.modal-card {
  position: relative;
  width: 100%;
  max-width: 480px;
  background: #fbf7ee;
  border: 2px solid #1a1a1a;
  border-radius: 24px;
  padding: 2.25rem 1.75rem 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25), 0 4px 15px rgba(0, 0, 0, 0.08);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid #d8d0c0;
  background: #ffffff;
  color: #1a1a1a;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #1a1a1a;
    color: #ffffff;
    border-color: #1a1a1a;
    transform: rotate(90deg);
  }
}

.modal-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.badge-icon {
  font-size: 2.2rem;
  margin-bottom: 0.25rem;
}

.modal-title {
  font-size: 1.7rem;
  font-weight: 900;
  color: #1a1a1a;
  margin: 0 0 0.35rem;
  letter-spacing: -0.01em;
}

.modal-subtitle {
  font-size: 0.9rem;
  color: #555555;
  margin: 0;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #222222;
}

.required {
  color: #e74c3c;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 0.95rem;
  font-family: inherit;
  color: #1a1a1a;
  background: #ffffff;
  border: 1.5px solid #d8d0c0;
  border-radius: 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: #1a1a1a;
    box-shadow: 0 0 0 3.5px rgba(0, 0, 0, 0.1);
  }
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-error {
  font-size: 0.85rem;
  color: #d63031;
  margin: 0;
  font-weight: 600;
}

.submit-btn {
  width: 100%;
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  font-weight: 800;
  color: #ffffff;
  background: #1a1a1a;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.modal-success {
  text-align: center;
  padding: 2rem 1rem;

  .success-icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: #27ae60;
    margin: 0 0 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #444444;
    margin: 0;
  }
}
</style>
