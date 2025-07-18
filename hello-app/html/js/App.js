import { ref } from 'vue';
import axios from 'axios';
import { API_BASE_URL } from './config.js';

const App = {
    setup() {
        const name = ref('');
        const message = ref('');
        const error = ref('');
        const loading = ref(false);

        const handleSubmit = async () => {
            try {
                loading.value = true;
                error.value = '';
                const response = await axios.get(`${API_BASE_URL}/hello?name=${encodeURIComponent(name.value)}`);
                message.value = response.data.message;
            } catch (err) {
                error.value = err.response?.data?.error || 'Error al conectar con el servicio';
                console.error('Error:', err);
            } finally {
                loading.value = false;
            }
        };

        return {
            name,
            message,
            error,
            loading,
            handleSubmit
        };
    },

    template: `
        <div class="container">
            <h1>Hello</h1>
            <form @submit.prevent="handleSubmit" class="form">
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input 
                        id="name"
                        v-model="name"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        :disabled="loading"
                    >
                </div>
                <button type="submit" :disabled="loading">
                    {{ loading ? 'Enviando...' : 'Enviar' }}
                </button>
            </form>
            <div v-if="message" class="message">
                {{ message }}
            </div>
            <div v-if="error" class="error">
                {{ error }}
            </div>
        </div>
    `
};

export default App;