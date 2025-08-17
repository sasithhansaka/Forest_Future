<?php

namespace App\Repositories\All\Donations;

use App\Models\Donation;
use App\Repositories\Base\BaseRepository;

class DonationRepository extends BaseRepository implements DonationInterface
{
    /**
     * DonationRepository constructor.
     *
     * @param Donation $model
     */
    public function __construct(Donation $model)
    {
        parent::__construct($model);
    }

    /**
     * Get all donations ordered by a specific column.
     *
     * @param string $column    Column to order by
     * @param string $direction 'asc' or 'desc'
     * @param array  $columns   Columns to select
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function allOrderBy(string $column, string $direction = 'asc', array $columns = ['*'])
    {
        return $this->model->orderBy($column, $direction)->get($columns);
    }

    /**
     * Get the sum of trees_planted.
     *
     * @return int
     */
    public function sumTreesPlanted(): int
    {
        return (int) $this->model->sum('trees_planted');
    }


}
