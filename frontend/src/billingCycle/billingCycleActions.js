import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispath => { 
        const id = values._id ? values._id : ''

        // poderia utilizar axios.post ou axios.put
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.')
            dispath(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
        })
    } 
}

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle) // Inicializa o formulario com os dados
    ]
}

export function showDelete(billingCycle){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle) 
    ]
}

export function init(){
    // Somente é possível passar array de actions por causa do redux-multi
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}