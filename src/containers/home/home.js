import React from 'react';
import { connect } from 'react-redux';
import { getData, setVin } from '../../store/actions/vinsSearch';
import SearchBar from '../../components/search-bar';
import InfoList from '../../components/info-list';
import LastVins from '../../components/last-vins';
import styles from './home.module.scss';

export const Home = ({ onSubmit, setVin, currentVin, loading, cache, error, searchResults }) => {

  return (
    <>
      <h1 className={styles.title}>VIN Decoder</h1>
      <SearchBar onSubmit={onSubmit}
                  isDisabled={loading}
                  classes={[styles.searchBar]} />
      <LastVins vins={cache} onClick={setVin} />
      {currentVin && <div className="note">{currentVin.message}</div>}
      <InfoList list={currentVin ? currentVin.results : []} />
    </>
  )
}

function mapStateToProps(state) {
  return {
    setVin: state.vinsSearch.setVin,
    currentVin: state.vinsSearch.currentVin,
    loading: state.vinsSearch.loading,
    cache: state.vinsSearch.cache,
    error: state.vinsSearch.error,
    searchResults: state.vinsSearch.searchResults,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (e, value) => dispatch(getData(value)),
    setVin: (cacheElem) => dispatch(setVin(cacheElem)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);