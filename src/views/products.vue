<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" lg="7">
        <v-row>
          <v-col cols="12" lg="6">
            <h1 class="text-h3 font-weight-bold">Products</h1>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="query"
              hide-details
              placeholder="Search for keywords..."
              variant="outlined"
              @keyup="search(query)"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="7">
        <v-table class="table--bordered">
          <thead>
            <tr>
              <th
                v-for="(header, i) in products.headers" :key="i"
                class="font-weight-bold text-center text-black"
                v-text="header.text"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in products.items" :key="i">
              <td>{{ item.name }}</td>
              <td class="text-right">{{ item.price }}</td>
              <td>
                <v-layout>
                  <v-btn flat size="small" class="ml-3" color="primary" @click="edit(item)">Edit</v-btn>
                  <v-btn flat size="small" class="ml-3" variant="outlined">Delete</v-btn>
                </v-layout>
              </td>
            </tr>
          </tbody>
        </v-table>

      </v-col>
      <v-col cols="12" lg="5">
        <form class="pa-8 bg-grey-lighten-3" @submit.prevent="submit(product)">
          <div class="text-center mb-10">
            <h2 class="font-weight-bold mb-6">Header Text</h2>
            <p class="text-subtitle-1 text-disabled">Lorem ipsum dolor sit amet consectetur elit.</p>
          </div>

          <v-text-field v-model="product.name" hide-details placeholder="Name" variant="outlined" class="text-field--simple mb-6 white"></v-text-field>
          <v-text-field v-model="product.price" hide-details placeholder="Price" variant="outlined" class="text-field--simple mb-6 white"></v-text-field>

          <v-btn
            flat block size="large"
            class="mt-4 text-none"
            color="primary"
            type="submit"
          >{{ product.isEditing ? 'Save' : 'Create' }}</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AppSearchBar from '@/components/Search/AppSearchBar.vue';
import { reactive, ref } from 'vue';
import { debounce, isEmpty } from 'lodash';

// hardcoded for now.
const products = reactive({
  headers: [
    { text: 'Name' },
    { text: 'Price' },
    { text: 'Action' },
  ],
  items: [
    { id: 1, name: 'Lorem ipsum 01', price: '10.00' },
    { id: 2, name: 'Lorem ipsum 02', price: '11.00' },
    { id: 3, name: 'Lorem ipsum 03', price: '9.20' },
    { id: 4, name: 'Lorem ipsum 04', price: '124.50' },
    { id: 5, name: 'Lorem ipsum 05', price: '60.00' },
    { id: 6, name: 'Lorem ipsum 06', price: '3.00' },
    { id: 7, name: 'Lorem ipsum 07', price: '80.00' },
    { id: 8, name: 'Lorem ipsum 08', price: '80.00' },
    { id: 9, name: 'Lorem ipsum 09', price: '80.00' },
    { id: 10, name: 'Lorem ipsum 10', price: '80.00' },
    { id: 11, name: 'Lorem ipsum 11', price: '80.00' },
    { id: 12, name: 'Lorem ipsum 12', price: '80.00' },
  ],
});
// Note: only needed because data is hardcoded.
const _origProductItems = products.items;

const product = reactive({
  isEditing: false,
  id: null,
  name: '',
  price: '',
});

function edit (item) {
  product.id = item.id;
  product.name = item.name;
  product.price = item.price;
  product.isEditing = true;
}

function submit (product) {
  if (product.isEditing) {
    const item = products.items.find(i => i.id === product.id);
    item.name = product.name;
    item.price = product.price;
    const itemIndex = products.items.findIndex(i => i.id === product.id);
    products.items.splice(itemIndex, 1, item);
  } else {
    const item = {
      name: product.name,
      price: product.price,
    };
    products.items.push(item);
  }

  product.id = null;
  product.name = '';
  product.price = '';
  product.isEditing = false;
}

const query = ref('');
const search = debounce(query => {
  // API call here, but since data is hardcoded use filter instead.
  if (isEmpty(query)) {
    // Simulate API call without sending `q=<query>`
    products.items = _origProductItems;
  } else {
    products.items = _origProductItems;
    products.items = products.items.filter(i => i.name.includes(query) || i.price.includes(query));
  }
}, 300);
</script>
