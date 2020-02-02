/* 
 * Class Store for wrapping and managing a set of object data
 */

class Store {
    constructor() {

    }

    // region Properties
    /* 
     * Primary key of model in database
     */
    primaryKey = null

    /* 
     * Config auto loading when initialize store
     */
    autoLoad = false

    /* 
     * State isLoading of store
     */
    loading = false

    /* 
     * sort data as soon as finish loading data
     */
    sortOnLoad = false

    /* 
     * sort data from server side
     * if remoteSort = true, ignore sortOnLoad
     */
    remoteSort = false


    // end Properties

    // region Private

    // end Private

    // region Public

    // end Public
}

export default new Store();