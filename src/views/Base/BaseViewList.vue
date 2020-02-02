<template>
    <div class="base-view-detail">
        
    </div>
</template>

<script>
import router from '@/router'
import BaseAPI from '@/api/baseapi'

export default {
    name: 'BaseViewList',
    props: {
        title: String
    },
    created: {

    },
    data() {
        return {
            datatype: null,
            entityName: null,
            entityKey: 'dataid',
            selectedItems: [],
            entities: []
        }
    },
    // after finish rendering the UI, load data
    mounted() {
        this.load();
    },
    computed: {
        // item selected currently
        currentItem() {
            return this.selectedItems.length > 0 ? this.selectedItems[this.selectedItems.length - 1] : null;
        },
        api() {
            return new BaseAPI();
        }
    },
    methods: {
        // call api to get data
        load() {
            var t = this.entityName;
            this.api.getList({
                entityName: this.entityName
            }).then(res => {
                this.entities = res.data;
            })
        },
        // refresh
        refresh() {
            this.load();
        },
        // get id of current record
        getCurrentData(item) {
            if (!item) {
                item = this.currentItem;
            } else {
                var obj = {
                    dataid: this.entityKey ? item[this.entityKey] : item.dataid,
                }
                return obj;
            }
            return null;
        },
        // edit mode
        edit(item) {
            // get routerName
            // get value
            router.push({
                name: '',    //routerName
                params: {
                    mode: 'edit',
                    id: '',  // some id
                }
            })
        },
        add() {
            router.push({
                name: this.detailRouterName,
                params: {
                    mode: 'add',
                    id: ''
                }
            })
        },
        delete() {
            // call api to delete
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
