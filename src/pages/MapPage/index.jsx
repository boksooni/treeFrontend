import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfoHeader from '../../components/InfoHeader'

// Component
import { RegisterLocation } from './Component/RegisterLocation'

// CSS
import '../MapPage/index.css'

export const MapPage = () => {
  const [keyword, setKeyword] = useState('')
  const [keywordList, setKeywordList] = useState([])
  const [page, setPage] = useState('main')
  const [selectLocation, setSelectedLocation] = useState([])

  // const {kakao} = window;

  useEffect(() => {
    searchLocation().then((r) => console.log(r))
  }, [])

  const searchLocation = async () => {
    //     let mapContainer = document.getElementById('map'), // 지도를 표시할 div
    //       mapOption = {
    //         center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    //         level: 3 // 지도의 확대 레벨
    //       };
    //
    // // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    //     let map = new kakao.maps.Map(mapContainer, mapOption);
    //
    //     console.log(map)

    const url =
      'https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=15&query=' + keyword
    axios
      .get(url, {
        headers: {
          Authorization: 'KakaoAK f5da53c3a71bebe0211a63a511ff2bc8',
        },
      })
      .then(function (response) {
        setKeywordList(response.data?.documents)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const onKeyEvent = (e) => {
    if (e.key === 'Enter') {
      searchLocation().then((r) => console.log(r))
    }
  }

  const handleDetailPage = (data) => {
    setPage(data)
  }

  return (
    <>
      <InfoHeader />
      <div className={'mapContainer'}>
        {page === 'main' ? (
          <>
            <div className={'top'}>
              <div className={'title'}>주소 설정</div>
            </div>
            <div className={'middle'}>
              <div className={'input search'}>
                <img src={'/icon/ico-search.png'} alt={'search icon'} />
                <input
                  value={keyword}
                  placeholder={'지번, 도로명, 건물명으로 검색'}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyPress={onKeyEvent}
                />
              </div>
              <div className={'input gps'}>
                <img src={'/icon/ico-gps.png'} alt={'gps icon'} />
                <span>현재 위치로 설정</span>
                <img src={'/icon/ico-right-arrow.png'} alt={'right-arrow icon'} />
              </div>
            </div>
            <div className={'divide'}></div>
            <div className={'bottom'}>
              {(keywordList || []).map((item, index) => {
                return (
                  <div
                    className={'keywordItem'}
                    key={index}
                    onClick={() => {
                      handleDetailPage('detail')
                      setSelectedLocation(item)
                    }}
                  >
                    <div className={'placeName'}>{item['place_name']}</div>
                    <div className={'addressName'}>
                      <div className={'tagName'}>도로명</div>
                      <div className={'detailAddress'}>{item['address_name']}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : null}
        <div id={'map'}></div>
        {page === 'detail' ? (
          <RegisterLocation location={selectLocation} setPage={setPage} />
        ) : null}
      </div>
    </>
  )
}
