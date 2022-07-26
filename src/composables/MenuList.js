/*
 * @Descripttion: 描述-
 * @version: v1.0
 * @Author: yichonglou
 * @Date: 2022-06-13 14:22:58
 * @FilePath: \studyByVueClie:\learn\studyByVite\src\composables\MenuList.js
 * @LastEditors: yichonglou
 * @LastEditTime: 2022-07-26 11:36:51
 */
const ollist = []
export const cesiumlist = [
  {
    name: '矢量数据',
    id: 'c-1',
    anchor: '矢量数据',
    children: [
      {
        name: 'Label文字',
        id: 'c-1-1',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-label.jpg',
        path: '/entity/label'
      },
      {
        name: 'CanvasLabel文字',
        id: 'c-1-2',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-canvasLabel.jpg',
        path: '/entity/canvasLabel'
      },
      {
        name: '文字贴图',
        id: 'c-1-3',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-textMaterialProperty.jpg',
        path: '/entity/textMaterialProperty'
      },
      {
        name: 'Point点',
        id: 'c-1-4',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-point.jpg',
        path: '/entity/point'
      },
      {
        name: 'Billboard图标点',
        id: 'c-1-5',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-billboard.jpg',
        path: '/entity/billboard'
      },
      {
        name: '图标点+文字聚合',
        id: 'c-1-6',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-billboard-clustering.jpg',
        path: '/entity/billboard-clustering'
      },
      {
        name: 'Canvas图片点',
        id: 'c-1-7',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-billboard-canvas.jpg',
        path: '/entity/billboard-canvas'
      },
      {
        name: '字体图片点',
        id: 'c-1-8',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-billboard-font.jpg',
        path: '/entity/billboard-font'
      },
      {
        name: 'Div图片点',
        id: 'c-1-9',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-billboard-div.jpg',
        path: '/entity/billboard-div'
      },
      {
        name: 'Plane平面',
        id: 'c-1-10',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-plane.jpg',
        path: '/entity/plane'
      },
      {
        name: 'Box盒子',
        id: 'c-1-11',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-box.jpg',
        path: '/entity/box'
      },
      {
        name: 'Circle圆、圆柱',
        id: 'c-1-12',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-circle.jpg',
        path: '/entity/circle'
      },
      {
        name: 'Ellipse椭圆、椭圆柱',
        id: 'c-1-13',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-ellipse.jpg',
        path: '/entity/ellipse'
      },
      {
        name: 'Cylinder圆锥',
        id: 'c-1-14',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-cylinder.jpg',
        path: '/entity/cylinder'
      },
      {
        name: '统计柱状图(Cylinder案例)',
        id: 'c-1-15',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-cylinder-gdp.jpg',
        path: '/entity/cylinder-gdp'
      },
      {
        name: '圆锥追踪体',
        id: 'c-1-16',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-coneTrack.jpg',
        path: '/entity/coneTrack'
      },
      {
        name: 'Ellipsoid球体',
        id: 'c-1-17',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-ellipsoid.jpg',
        path: '/entity/ellipsoid'
      },
      {
        name: '半球、雷达范围',
        id: 'c-1-18',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-ellipsoid-hemi.jpg',
        path: '/entity/ellipsoid-hemi'
      },
      {
        name: 'Model小模型',
        id: 'c-1-19',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-model.jpg',
        path: '/entity/model'
      },
      {
        name: '动态点位置',
        id: 'c-1-20',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-addDynamicPosition.gif',
        path: '/entity/addDynamicPosition'
      },
      {
        name: 'Path轨迹',
        id: 'c-1-21',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-path.jpg',
        path: '/entity/path'
      },
      {
        name: '无人机飞行轨迹',
        id: 'c-1-22',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-path-wrj.gif',
        path: '/entity/path-wrj'
      },
      {
        name: '战机绕圈飞行轨迹',
        id: 'c-1-23',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-path-zhanji.gif',
        path: '/entity/path-zhanji'
      },
      {
        name: 'Polyline线',
        id: 'c-1-24',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-polyline.jpg',
        path: '/entity/polyline'
      },
      {
        name: '曲线',
        id: 'c-1-25',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-polyline-curve.jpg',
        path: '/entity/polyline-curve'
      },
      {
        name: 'PolyLineVolume管道线',
        id: 'c-1-26',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-polylineVolume.jpg',
        path: '/entity/polylineVolume'
      },
      {
        name: 'Corridor走廊',
        id: 'c-1-27',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-corridor.jpg',
        path: '/entity/corridor'
      },
      {
        name: 'Wall墙',
        id: 'c-1-28',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-wall.jpg',
        path: '/entity/wall'
      },
      {
        name: 'Rectangle矩形',
        id: 'c-1-29',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-rectangle.jpg',
        path: '/entity/rectangle'
      },
      {
        name: 'Polygon面',
        id: 'c-1-30',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-polygon.jpg',
        path: '/entity/polygon'
      },
      {
        name: '正多边形',
        id: 'c-1-31',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-polygon-regular.jpg',
        path: '/entity/polygon-regular'
      },
      {
        name: '扇形',
        id: 'c-1-32',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-polygon-sector.jpg',
        path: '/entity/polygon-sector'
      },
      {
        name: '箭头军标',
        id: 'c-1-33',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-arrow.jpg',
        path: '/entity/arrow'
      },
      {
        name: 'Property属性',
        id: 'c-1-34',
        previewImgSrc: 'http://mars3d.cn/config/thumbnail/graphic-entity-property.jpg',
        path: '/entity/property'
      }
    ]
  }
]
export const threelist = [
  {
    name: '新建Demo2',
    id: 't-1',
    path: '/demo2'
  }
]

export default [
  {
    name: 'Cesium',
    icon: 'Pear',
    children: cesiumlist
  },
  {
    name: 'Three',
    icon: 'share',
    children: threelist
  }
]
