import { Controller, Get, Query } from '@nestjs/common';
import { PublicProfile } from '../dto/PublicProfile';
import { DashboardService } from '../dashboard-service/dashboard.service';
import { ActiveUsersQuantity } from '../dto/ActiveUsersQuantity';
import { DomainUsage } from '../dto/DomainUsage';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Dashboard")
@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) { }

    @Get('search')
    async search(@Query("keyword") keyword: string): Promise<PublicProfile[]> {
        return this.dashboardService.search(keyword);
    }

    @Get("active-users")
    async getActiveUsersQuantity(): Promise<ActiveUsersQuantity> {
        return this.dashboardService.getActiveUsersQuantity();
    }

    @Get("domain-usage")
    async getDomainUsage(): Promise<DomainUsage[]> {
        return this.dashboardService.getMostUsedDomains();
    }
}
