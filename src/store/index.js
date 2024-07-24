import { createStore } from 'vuex'

export default createStore({
  state: {
    // São os dados que temos. Ex: Objetos, Array, etc.
    tarefas: [],
    observacoes: [],
    loading: false
  },
  getters: {
    // Fazendo com que as tarefas 'concluídas' apareçam na janela de tarefas:
    uncheckends(state) {
      return state.tarefas.filter((tarefa) => tarefa.checked === false) // Tarefas não concluídas;
    },
    checkeds(state) {
      return state.tarefas.filter((tarefa) => tarefa.checked) // Tarefas concluídas
    }
  },
  mutations: {
    // Funções síncronas
    addTarefa(state, payload) {
      state.tarefas.push(payload)
    },
    addObservacoes(state, payload) {
      state.observacoes.push(payload)
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    toggleTarefa(state, payload) {
      const tarefa = state.tarefas.find((item) => item.id === payload.id)
      if (tarefa) {
        tarefa.checked = !tarefa.checked
      }
    },
    toggleObservacao(state, payload) {
      const observacao = state.observacoes.find((item) => item.id === payload.id)
      if (observacao) {
        observacao.checked = !observacao.checked
      }
    },
    removeTarefa(state, payload) {
      const index = state.tarefas.findIndex((item) => item.id === payload.id)
      if (index > -1) {
        state.tarefas.splice(index, 1)
      }
    },
    removeObservacao(state, payload) {
      const index = state.observacoes.findIndex((item) => item.id === payload.id)
      if (index > -1) {
        state.observacoes.splice(index, 1)
      }
    },
    // Concluir todas as tarefas
    toggleLista(state, tarefaId) {
      const tarefas2 = state.tarefas.map((i) => {
        return tarefaId.includes(i.id) ? { ...i, checked: !i.checked } : i
      })
      state.tarefas = tarefas2
    },
    // Remover todas as tarefas
    removeLista(state, tarefaId) {
      const tarefas3 = state.tarefas.filter((item) => !tarefaId.includes(item.id))
      state.tarefas = tarefas3
    }
  },
  actions: {
    // Funções assincronas (podem ser promises e etc)
    addTarefa({ commit }, tarefa) {
      commit('setLoading', true)
      return new Promise((resolve) => {
        setTimeout(() => {
          tarefa.id = Date.now() // Pegando os dados
          commit('addTarefa', tarefa) // Pegando O método 'addTarefa'
          commit('setLoading', false)
          resolve(tarefa)
        }, 500)
      })
    },
    addObservacoes({ commit }, observacao) {
      commit('setLoading', true)
      return new Promise((resolve) => {
        setTimeout(() => {
          observacao.id = Date.now() // Pegando os dados
          commit('addObservacoes', observacao) // Pegando O método 'addObservacoes'
          commit('setLoading', false)
          resolve(observacao)
        }, 500)
      })
    },
    toggleTarefa({ commit }, tarefa) {
      commit('toggleTarefa', tarefa)
    },
    toggleObservacao({ commit }, observacao) {
      commit('toggleObservacao', observacao)
    },
    removeTarefa({ commit }, tarefa) {
      commit('removeTarefa', tarefa)
    },
    removeObservacao({ commit }, observacao) {
      commit('removeObservacao', observacao)
    },
    // Botão de concluir todas as tarefas:
    checkTodas({ commit, state }) {
      const uncheckedsId = state.tarefas.filter((i) => !i.checked).map((i) => i.id)
      commit('toggleLista', uncheckedsId)
    },
    //Desmarcar todas:
    uncheckTodas({ commit, state }) {
      const checkeds = state.tarefas.filter((i) => i.checked).map((i) => i.id)
      commit('toggleLista', checkeds)
    },
    // Remover todas:
    removeTodas({ commit, state }) {
      const checkeds = state.tarefas.filter((i) => i.checked).map((i) => i.id)
      commit('removeLista', checkeds)
    }
  },
  modules: {}
})
